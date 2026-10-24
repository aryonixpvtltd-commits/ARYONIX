import numpy as np
from PIL import Image

SRC = "/home/z/my-project/upload/aryonixlogo.png"
BRAND = "/home/z/my-project/public/brand"
APP = "/home/z/my-project/src/app"
import os
os.makedirs(BRAND, exist_ok=True)

im = Image.open(SRC).convert("RGBA")
a = np.asarray(im).astype(np.float32)
rgb = a[..., :3]
bg = np.array([0.0, 3.0, 15.0])
dist = np.sqrt(((rgb - bg) ** 2).sum(-1))
alpha = np.clip((dist - 20.0) / (62.0 - 20.0), 0, 1) * 255.0
keyed = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8))
keyed = keyed.crop((127, 227, 1136, 1004))

def tight(img, thr=30):
    arr = np.asarray(img)
    ys, xs = np.where(arr[..., 3] > thr)
    return img.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))

# blocks (from analysis)
mark = tight(keyed.crop((0, 0, keyed.width, 480)))          # blue A mark
word = tight(keyed.crop((0, 528, keyed.width, 633)))        # ARYONIX
full = keyed                                                 # whole lockup

mark.resize((288, 244), Image.LANCZOS).save(f"{BRAND}/logo-mark.png")
word.resize((460, 52), Image.LANCZOS).save(f"{BRAND}/logo-wordmark.png")
full.resize((760, 581), Image.LANCZOS).save(f"{BRAND}/logo-full.png")

# App icon: mark centered on near-black tile
def tile(size, inner_ratio=0.78):
    t = Image.new("RGBA", (size, size), (8, 9, 11, 255))
    m = mark.copy()
    w = int(size * inner_ratio)
    h = int(w * m.height / m.width)
    if h > int(size * inner_ratio):
        h = int(size * inner_ratio); w = int(h * m.width / m.height)
    t.paste(m.resize((w, h), Image.LANCZOS), ((size - w) // 2, (size - h) // 2), m.resize((w, h), Image.LANCZOS))
    return t

tile(512).save(f"{APP}/icon.png")
tile(180).save(f"{APP}/apple-icon.png")

# OG/Twitter: full lockup centered on #08090B
for name, size in [("opengraph-image", (1200, 630)), ("twitter-image", (1200, 630))]:
    og = Image.new("RGBA", size, (8, 9, 11, 255))
    f = full.copy()
    w = int(size[1] * 0.78 * f.width / f.height)
    h = int(size[1] * 0.78)
    og.paste(f.resize((w, h), Image.LANCZOS), ((size[0] - w) // 2, (size[1] - h) // 2), f.resize((w, h), Image.LANCZOS))
    og.save(f"{APP}/{name}.png")

print("done:", os.listdir(BRAND), os.listdir(APP))
