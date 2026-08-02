import fitz  # PyMuPDF
import os

pdf_light = r"D:\DUSK Theory\Dusk Theory logo.pdf"
pdf_dark = r"D:\DUSK Theory\Dusk Theory logo black.pdf"

out_dir = r"C:\Users\rajar\.gemini\antigravity-ide\scratch\retail-clothing-store\public"
os.makedirs(out_dir, exist_ok=True)

# Convert Light logo PDF
doc_light = fitz.open(pdf_light)
page_light = doc_light[0]
pix_light = page_light.get_pixmap(dpi=300)
pix_light.save(os.path.join(out_dir, "logo-light.png"))
print("Saved logo-light.png")

# Convert Dark logo PDF
doc_dark = fitz.open(pdf_dark)
page_dark = doc_dark[0]
pix_dark = page_dark.get_pixmap(dpi=300)
pix_dark.save(os.path.join(out_dir, "logo-dark.png"))
print("Saved logo-dark.png")
