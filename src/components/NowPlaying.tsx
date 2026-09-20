"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const fallbackDuration = 3 * 60 + 59;
const defaultVolume = 0.33;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}

function VolumeIcon({ muted }: { muted: boolean }) {
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

export default function NowPlaying() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const previousVolumeRef = useRef(defaultVolume);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(fallbackDuration);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    function closePlayer(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("pointerdown", closePlayer);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("pointerdown", closePlayer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  }

  function seek(nextTime: number) {
    if (audioRef.current) audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function changeVolume(nextVolume: number) {
    setVolume(nextVolume);
    if (nextVolume > 0) previousVolumeRef.current = nextVolume;
  }

  const progress = duration ? `${(currentTime / duration) * 100}%` : "0%";
  const volumeProgress = `${volume * 100}%`;

  return (
    <div className="v2-now-playing-wrap" ref={wrapperRef}>
      <button
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Close" : "Open"} music player`}
        className={`v2-now-playing-trigger${isPlaying ? " is-playing" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <Image alt="" aria-hidden="true" height={500} src="/assets/icons/spotify.png" width={500} />
      </button>

      {isOpen && (
        <div className="v2-audio-player">
          <button
            aria-label="Minimize music player"
            className="v2-audio-minimize"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <span />
          </button>

          <Image
            alt="Blue and White Porcelain cover"
            className="v2-audio-cover"
            height={300}
            src="/assets/audio/song-cover.jpeg"
            width={300}
          />

          <div className="v2-audio-details">
            <span>currently listening to</span>
            <strong>青花瓷</strong>
            <small>Jay Chou</small>
          </div>

          <div className="v2-audio-progress-wrap">
            <input
              aria-label="Song progress"
              className="v2-audio-range v2-audio-progress"
              max={duration}
              min="0"
              onChange={(event) => seek(Number(event.target.value))}
              step="0.1"
              style={{ "--range-progress": progress } as CSSProperties}
              type="range"
              value={Math.min(currentTime, duration)}
            />
            <div className="v2-audio-time"><span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span></div>
          </div>

          <div className="v2-audio-controls">
            <button
              aria-label={volume === 0 ? "Unmute" : "Mute"}
              className="v2-audio-volume-button"
              onClick={() => changeVolume(volume === 0 ? previousVolumeRef.current : 0)}
              type="button"
            >
              <VolumeIcon muted={volume === 0} />
            </button>
            <input
              aria-label="Volume"
              className="v2-audio-range v2-audio-volume"
              max="1"
              min="0"
              onChange={(event) => changeVolume(Number(event.target.value))}
              step="0.01"
              style={{ "--range-progress": volumeProgress } as CSSProperties}
              type="range"
              value={volume}
            />
            <button
              aria-label={isPlaying ? "Pause Blue and White Porcelain" : "Play Blue and White Porcelain"}
              className="v2-audio-play-button"
              onClick={() => void togglePlayback()}
              type="button"
            >
              <img alt="" aria-hidden="true" src={isPlaying ? "/assets/icons/pause.svg" : "/assets/icons/play.svg"} />
            </button>
          </div>
        </div>
      )}

      <audio
        loop
        onDurationChange={(event) => setDuration(event.currentTarget.duration || fallbackDuration)}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        preload="metadata"
        ref={audioRef}
        src="/assets/audio/song.mp3"
      />
    </div>
  );
}
