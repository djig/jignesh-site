#!/usr/bin/env python3
"""Rasterize the 1200x630 OG image to public/og.png.

Tries Chrome/Chromium headless first (scripts/og.html), then a Pillow fallback.
"""
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "scripts" / "og.html"
OUT = ROOT / "public" / "og.png"


def chrome_bin():
    for name in (
        "google-chrome",
        "google-chrome-stable",
        "chromium",
        "chromium-browser",
        "chrome",
    ):
        found = shutil.which(name)
        if found:
            return found
    return None


def via_chrome() -> bool:
    chrome = chrome_bin()
    if not chrome:
        return False
    uri = HTML.resolve().as_uri()
    cmd = [
        chrome,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-sandbox",
        "--force-device-scale-factor=1",
        "--window-size=1200,630",
        f"--screenshot={OUT}",
        uri,
    ]
    print("generate-og:", " ".join(cmd))
    subprocess.run(cmd, check=True)
    return OUT.exists() and OUT.stat().st_size > 0


def via_pillow() -> bool:
    try:
        from PIL import Image, ImageDraw, ImageFont
    except ImportError:
        return False

    W, H = 1200, 630
    gold = "#e8b86d"
    ink = "#eceae4"
    mute = "#9a968e"
    dim = "#6b6862"
    img = Image.new("RGB", (W, H), "#0a0a0b")
    draw = ImageDraw.Draw(img)

    for x in range(0, W, 72):
        draw.line([(x, 0), (x, H)], fill=(38, 32, 22))
    for y in range(0, H, 72):
        draw.line([(0, y), (W, y)], fill=(38, 32, 22))

    draw.rectangle([48, 48, 1152, 582], outline=(120, 96, 56))
    draw.rectangle([1088, 80, 1136, 128], outline=gold)
    try:
        display = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 84
        )
        small = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 20
        )
        mid = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 26
        )
        tiny = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 16
        )
    except OSError:
        display = small = mid = tiny = ImageFont.load_default()

    draw.text((80, 96), "FOSTER CITY, CA", fill=gold, font=small)
    draw.text((80, 180), "Jignesh", fill=ink, font=display)
    draw.text((80, 276), "Dhamecha.", fill=ink, font=display)
    draw.rectangle([80, 392, 176, 394], fill=gold)
    draw.text((80, 424), "Senior Frontend / Fullstack / AI Engineer", fill=mute, font=mid)
    draw.text(
        (80, 478),
        "14+ years product UI  ·  Agentic and generative interfaces",
        fill=dim,
        font=small,
    )
    draw.text((1098, 96), "JD", fill=gold, font=tiny)
    img.save(OUT, "PNG")
    return True


def main() -> int:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    try:
        if via_chrome():
            print(f"wrote {OUT} via chrome")
            return 0
    except subprocess.CalledProcessError as exc:
        print(f"chrome failed: {exc}", file=sys.stderr)
    if via_pillow():
        print(f"wrote {OUT} via pillow")
        return 0
    print("could not generate og.png", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
