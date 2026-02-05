import os
import time
from playwright.sync_api import sync_playwright, expect

def verify_seo():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Base URL (default Astro preview port)
        base_url = "http://localhost:4321"

        print("Verifying Home Page...")
        try:
            page.goto(base_url, timeout=10000)
        except Exception as e:
            print(f"Failed to load home page: {e}")
            return

        # Check title
        title = page.title()
        print(f"Page Title: {title}")

        # Check canonical
        canonical = page.locator('link[rel="canonical"]')
        if canonical.count() > 0:
            href = canonical.get_attribute("href")
            print(f"Canonical: {href}")
        else:
            print("Canonical tag missing!")

        # Check Schema
        schemas = page.locator('script[type="application/ld+json"]').all_inner_texts()
        print(f"Found {len(schemas)} JSON-LD scripts on Home.")
        for s in schemas:
            if "Organization" in s:
                print("Organization schema found.")
            if "WebSite" in s:
                print("WebSite schema found.")

        page.screenshot(path="/home/jules/verification/home.png")

        print("Verifying Product Page...")
        page.goto(f"{base_url}/producto/crema-mani-natural")

        # Check Schema
        schemas = page.locator('script[type="application/ld+json"]').all_inner_texts()
        product_found = False
        for s in schemas:
            if "Product" in s:
                product_found = True
                print("Product schema found.")
        if not product_found:
            print("WARNING: Product schema missing.")

        page.screenshot(path="/home/jules/verification/product.png")

        print("Verifying Recipe Page...")
        page.goto(f"{base_url}/receta/hardy-cookies")

        # Check Schema
        schemas = page.locator('script[type="application/ld+json"]').all_inner_texts()
        recipe_found = False
        for s in schemas:
            if "Recipe" in s:
                recipe_found = True
                print("Recipe schema found.")
        if not recipe_found:
            print("WARNING: Recipe schema missing.")

        page.screenshot(path="/home/jules/verification/recipe.png")

        browser.close()

if __name__ == "__main__":
    # Ensure directory exists
    os.makedirs("/home/jules/verification", exist_ok=True)
    # Wait a moment for server
    time.sleep(5)
    verify_seo()
