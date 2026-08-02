import fitz  # PyMuPDF
from PIL import Image, ImageChops
import os

pdf_light = r"D:\DUSK Theory\Dusk Theory logo.pdf"
pdf_dark = r"D:\DUSK Theory\Dusk Theory logo black.pdf"
out_dir = r"C:\Users\rajar\.gemini\antigravity-ide\scratch\retail-clothing-store\public"

def process_pdf_logo(pdf_path, out_filename, is_dark_bg=True):
    doc = fitz.open(pdf_path)
    page = doc[0]
    # Render at high DPI for ultra sharpness
    pix = page.get_pixmap(dpi=400, alpha=True)
    img_path = os.path.join(out_dir, "temp_" + out_filename)
    pix.save(img_path)
    
    img = Image.open(img_path).convert("RGBA")
    
    # Crop to non-transparent / non-background bounding box
    # Convert image to numpy or inspect pixels
    datas = img.getdata()
    
    newData = []
    
    if is_dark_bg:
        # For Dark PDF logo (has black background, white/gold logo)
        # Turn solid black pixels to transparent alpha
        for item in datas:
            # item is (R, G, B, A)
            r, g, b, a = item
            # If pixel is near black (background)
            if r < 30 and g < 30 and b < 30:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
    else:
        # For Light PDF logo (has white background, black/dark logo)
        # Turn solid white pixels to transparent alpha
        for item in datas:
            r, g, b, a = item
            if r > 225 and g > 225 and b > 225:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
                
    img.putdata(newData)
    
    # Get bounding box of content (non-zero alpha)
    bbox = img.getbbox()
    if bbox:
        # Add small 10px padding around tight crop
        pad = 10
        w, h = img.size
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(w, bbox[2] + pad)
        bottom = min(h, bbox[3] + pad)
        cropped = img.crop((left, top, right, bottom))
    else:
        cropped = img
        
    final_path = os.path.join(out_dir, out_filename)
    cropped.save(final_path, "PNG")
    print(f"Successfully processed and cropped {out_filename} -> size {cropped.size}")
    if os.path.exists(img_path):
        os.remove(img_path)

# Process Dark Logo (white/gold logo on dark background -> transparent PNG for dark mode)
process_pdf_logo(pdf_light, "logo-light.png", is_dark_bg=True)

# Process Light Logo (black logo on light background -> transparent PNG for light mode)
process_pdf_logo(pdf_dark, "logo-dark.png", is_dark_bg=False)
