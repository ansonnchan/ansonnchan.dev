"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";

const AUDIO_SRC = "/soundtrack/jazz.mp3";
const COVER_SRC = "/soundtrack/sticker.jpeg";
const PLAY_ICON_SRC = "/assets/projects/play-button.png";
const PAUSE_ICON_SRC = "/assets/projects/pause-button.png";
const TRACK_TITLE = "blue noots";
const TRACK_ARTIST = "The Waddle Tones";

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "0:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function RangeIcon({ muted }: { muted: boolean }) {
  return muted ? (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z" />
      <path d="m16 9 5 6m0-6-5 6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  );
}

function PlayIcon({ playing }: { playing: boolean }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      src={playing ? PLAY_ICON_SRC : PAUSE_ICON_SRC}
    />
  );
}

export default function MusicPlayer() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);
  const previousVolumeRef = useRef(0.72);
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.72);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.volume = volume;
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("timeupdate", updateTime);

    if (audio.readyState >= 1) updateDuration();

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolume = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = value;
    setVolume(value);
    if (value > 0) previousVolumeRef.current = value;
  };

  const toggleMute = () => {
    handleVolume(volume === 0 ? previousVolumeRef.current : 0);
  };

  const setPlayerExpanded = (nextExpanded: boolean) => {
    setExpanded(nextExpanded);
  };

  const progress = duration ? `${(currentTime / duration) * 100}%` : "0%";
  const volumeProgress = `${volume * 100}%`;
  const remaining = Math.max(duration - currentTime, 0);

  return (
    <aside
      className={`music-player ${expanded ? "expanded" : "minimized"}`}
      aria-label="Music player"
    >
      <audio loop preload="metadata" ref={audioRef} src={AUDIO_SRC} />

      {expanded ? (
        <div className="music-player-card">
          <button
            aria-label="Minimize music player"
            className="music-minimize"
            onClick={() => setPlayerExpanded(false)}
            type="button"
          >
            <span />
          </button>

          <img
            alt={`${TRACK_TITLE} cover art`}
            className="music-cover"
            src={COVER_SRC}
          />

          <div className="music-details">
            <p className="music-title">{TRACK_TITLE}</p>
            <p className="music-artist">{TRACK_ARTIST}</p>
          </div>

          <div className="music-progress-wrap">
            <input
              aria-label="Song progress"
              className="music-range music-progress"
              max={duration || 0}
              min="0"
              onChange={(event) => handleSeek(Number(event.target.value))}
              step="0.1"
              style={{ "--range-progress": progress } as CSSProperties}
              type="range"
              value={Math.min(currentTime, duration || 0)}
            />
            <div className="music-time" aria-live="off">
              <span>{formatTime(currentTime)}</span>
              <span>-{formatTime(remaining)}</span>
            </div>
          </div>

          <div className="music-controls">
            <button
              aria-label={volume === 0 ? "Unmute" : "Mute"}
              className="music-volume-button"
              onClick={toggleMute}
              type="button"
            >
              <RangeIcon muted={volume === 0} />
            </button>
            <input
              aria-label="Volume"
              className="music-range music-volume"
              max="1"
              min="0"
              onChange={(event) => handleVolume(Number(event.target.value))}
              step="0.01"
              style={{ "--range-progress": volumeProgress } as CSSProperties}
              type="range"
              value={volume}
            />
            <button
              aria-label={playing ? `Pause ${TRACK_TITLE}` : `Play ${TRACK_TITLE}`}
              className="music-play-button"
              onClick={togglePlayback}
              type="button"
            >
              <PlayIcon playing={playing} />
            </button>
          </div>
        </div>
      ) : (
        <div className="music-mini-card">
          <button
            aria-expanded="false"
            aria-label={`Expand music player for ${TRACK_TITLE}`}
            className="music-mini-expand"
            onClick={() => setPlayerExpanded(true)}
            type="button"
          >
            <img alt="" aria-hidden="true" src={COVER_SRC} />
            <span className="music-mini-title">{TRACK_TITLE}</span>
          </button>
          <button
            aria-label={playing ? `Pause ${TRACK_TITLE}` : `Play ${TRACK_TITLE}`}
            className="music-mini-play"
            onClick={(event) => {
              event.stopPropagation();
              void togglePlayback();
            }}
            type="button"
          >
            <PlayIcon playing={playing} />
          </button>
        </div>
      )}
    </aside>
  );
}
