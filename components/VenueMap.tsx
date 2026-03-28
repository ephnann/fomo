"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Venue } from "@/types/venue";

// ── Helpers ───────────────────────────────────────────────────────────────────

function numberedIcon(rank: number, active: boolean) {
  const size   = active ? 32 : 26;
  const bg     = active ? "#18181b" : "#ffffff";
  const border = active ? "#18181b" : "#a1a1aa";
  const color  = active ? "#ffffff" : "#52525b";
  const shadow = active
    ? "0 4px 12px rgba(0,0,0,.40)"
    : "0 1px 4px rgba(0,0,0,.18)";

  return L.divIcon({
    className: "",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${bg};border:2px solid ${border};
      display:flex;align-items:center;justify-content:center;
      font-size:11px;font-weight:700;font-family:system-ui,sans-serif;
      color:${color};box-shadow:${shadow};
    ">${rank}</div>`,
    iconSize:   [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function singlePinIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:14px;height:14px;border-radius:50%;
      background:#18181b;border:2.5px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,.35);
    "></div>`,
    iconSize:   [14, 14],
    iconAnchor: [7, 7],
  });
}

// Fits map bounds whenever the venue list changes
function AutoBounds({ venues }: { venues: Array<{ lat: number; lng: number }> }) {
  const map = useMap();
  useEffect(() => {
    if (venues.length === 0) return;
    if (venues.length === 1) {
      map.setView([venues[0].lat, venues[0].lng], 15);
      return;
    }
    const bounds = L.latLngBounds(venues.map((v) => [v.lat, v.lng]));
    map.fitBounds(bounds, { padding: [52, 52], maxZoom: 15 });
  }, [map, venues]);
  return null;
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface Props {
  venues: Venue[];
  /** ID of the currently hovered/active venue card — highlights its pin */
  activeId?: string | null;
  /** When true only a single dot pin is shown (venue detail page) */
  single?: boolean;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function VenueMap({ venues, activeId, single = false }: Props) {
  const centre: [number, number] =
    venues.length > 0
      ? [venues[0].lat, venues[0].lng]
      : [-27.4698, 153.0251]; // Brisbane CBD fallback

  return (
    <MapContainer
      center={centre}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
      zoomControl={!single}
      scrollWheelZoom={!single}
      dragging={!single}
      attributionControl={false}
    >
      {/* CartoDB Positron — already minimal; CSS makes it grayscale */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={20}
        className="grayscale-tiles"
      />

      <AutoBounds venues={venues} />

      {venues.map((venue, i) => (
        <Marker
          key={`${venue.id}-${activeId === venue.id}`}
          position={[venue.lat, venue.lng]}
          icon={
            single
              ? singlePinIcon()
              : numberedIcon(i + 1, activeId === venue.id)
          }
        >
          {!single && (
            <Tooltip
              direction="top"
              offset={[0, -14]}
              opacity={1}
            >
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "system-ui, sans-serif",
                color: "#18181b",
              }}>
                {venue.name}
              </span>
            </Tooltip>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}
