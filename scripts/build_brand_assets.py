"""Rebuild the ARYONIX brand asset set from the official logo upload.

Pipeline (as originally established): distance-based soft keying removes the
baked-in dark navy background without altering the mark's own colors or glow,
then crops/derives the full asset set. The mark is never recolored or redrawn.
"""
import numpy as np
from PIL import Image

SRC = "/home/z/my-project/upload/aryonixlogo.png"
im = Image.open(SRC).convert("RGBA")
a = np.asarray(im).astype(np.float32)
rgb = a[..., :3]

# Background reference = median of border pixels (dark navy)
border = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
bg = np.median(border, axis=0)
print("bg ref:", bg)

dist = np.sqrt(((rgb - bg) ** 2).sum(-1))
# Soft key: 0 alpha below t0, 255 above t1, ramp between
t0, t1 = 20.0, 62.0
alpha = np.clip((dist - t0) / (t1 - t0), 0, 1)
# Keep the mark's original color; alpha only from background distance
out = np.dstack([rgb, alpha * 255.0]).astype(np.uint8)
keyed = Image.fromarray(out, "RGBA")

arr = np.asarray(keyed)
ys, xs = np.where(arr[..., 3] > 8)
x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
print("content bbox:", x0, y0, x1, y1)
keyed = keyed.crop((x0, y0, x1 + 1, y1 + 1))
kw, kh = keyed.size
print("keyed size:", keyed.size)

# --- Split mark vs wordmark: find horizontal gap band in row coverage ---
cov = (np.asarray(keyed)[..., 3] > 8).sum(axis=1)
rows = np.where(cov > 0)[0]
gaps = []
prev = rows[0]
for r in rows[1:]:
    if r - prev > 12:
        gaps.append((prev, r))
    prev = r
print("gaps:", gaps)
