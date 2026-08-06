"use client";

import { useId, useState } from "react";
import type { WorkExperiencePhoto } from "@/data/experiences";

type ExperiencePhotoDisclosureProps = {
  company: string;
  photos: WorkExperiencePhoto[];
};

export default function ExperiencePhotoDisclosure({ company, photos }: ExperiencePhotoDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="work-photo-disclosure">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="work-photo-toggle"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true" className={`work-photo-triangle${isOpen ? " is-open" : ""}`}>▸</span>
        <span>{isOpen ? "hide team moments" : "a few team moments"}</span>
      </button>

      <div
        aria-hidden={!isOpen}
        className={`work-photo-panel${isOpen ? " is-open" : ""}`}
        id={panelId}
      >
        <div className="work-photo-panel-inner">
          <div aria-label={`${company} photos`} className="work-photo-gallery">
            {photos.map((photo) => (
              <figure key={photo.src}>
                <img
                  alt={photo.alt}
                  height={photo.height}
                  loading="lazy"
                  src={photo.src}
                  width={photo.width}
                />
                {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
