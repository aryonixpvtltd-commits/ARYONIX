import numpy as np
from PIL import Image
import os

SRC = "/home/z/my-project/upload/aryonixlogo.png"
os.makedirs("/tmp/brand", exist_ok=True)
im = Image.open(SRC).convert("RGBA")
a = np.asarray(im).astype(np.float32)
rgb = a[..., :3]
bg = np.array([0.0, 3.0, 15.0])
dist = np.sqrt(((rgb - bg) ** 2).sum(-1))
alpha = np.clip((dist - 20.0) / (62.0 - 20.0), 0, 1) * 255.0
keyed = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8))
keyed = keyed.crop((127, 227, 1136, 1004))
keyed.save("/tmp/brand/keyed-full.png")

arr = np.asarray(keyed)
cov = (arr[..., 3] > 8).sum(axis=1)
rows = np.where(cov > 0)[0]
blocks = []
start = rows[0]; prev = rows[0]
for r in rows[1:]:
    if r - prev > 12:
        blocks.append((start, prev)); start = r
    prev = r
blocks.append((start, prev))
for i, (r0, r1) in enumerate(blocks):
    band = keyed.crop((0, r0, keyed.width, r1 + 1))
    # tight-crop x
    ba = np.asarray(band)
    xs = np.where((ba[..., 3] > 8).any(axis=0))[0]
    band = band.crop((xs.min(), 0, xs.max() + 1, band.height))
    band.save(f"/tmp/brand/block{i}.png")
    print(i, "rows", r0, r1, "size", band.size)
