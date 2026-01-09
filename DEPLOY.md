# Deployment Guide

This project is a static website generated with Next.js. The build output is located in the `out` directory.

## Prerequisite
Run the build command to generate the static files:
```bash
npm run build-prod
```
This will create an `out` folder in your project root.

## Deploying to GoDaddy (cPanel)

GoDaddy usually uses cPanel for hosting management.

### Option 1: Using File Manager (Easiest)
1. **Compress the Output**:
   - Go to your local `out` folder.
   - Select all files and folders inside `out`.
   - Zip them into a file (e.g., `website.zip`).

2. **Log in to GoDaddy**:
   - Navigate to your product page and launch **cPanel Admin** for your hosting.

3. **Open File Manager**:
   - In cPanel, find and click on **File Manager**.

4. **Navigate to Public Folder**:
   - Go to `public_html`. (If this is for a subdomain, go to the folder matching that subdomain).
   - **Important**: Delete any default files like `default.html` or existing site files if you are replacing them.

5. **Upload and Extract**:
   - Click **Upload** in the top bar and upload your `website.zip`.
   - Once uploaded, go back to File Manager.
   - Right-click `website.zip` and select **Extract**.
   - Extract files to `public_html` (check paths to ensure `index.html` is directly in `public_html` and not a subfolder).

6. **Cleanup**:
   - Delete the `website.zip` file.

### Option 2: Using FTP (FileZilla)
1. **Get FTP Credentials**:
   - In GoDaddy cPanel, find **FTP Accounts** to find your username and potential connection details. Host is usually your domain name or IP.

2. **Connect**:
   - Open FileZilla (or another FTP client).
   - Connect using your Host, Username, and Password. Port is usually 21.

3. **Upload**:
   - Navigate to `public_html` on the server (Right side).
   - Navigate to the `out` folder on your computer (Left side).
   - Select all files inside `out` and drag them to `public_html`.

## Troubleshooting

- **404 Errors**: Since `trailingSlash: true` is enabled in `next.config.js`, navigating to `/about` will properly look for `/about/index.html`. This works natively on GoDaddy/Apache servers.
- **Images not loading**: Ensure you uploaded the `assets` and `_next` folders correctly.

## Custom Domain Setup

If you have purchased a custom domain (e.g., `www.yourcompany.com`), configuring it depends on how you set it up in GoDaddy:

1. **Primary Domain**:
   - If this is the main domain for your hosting plan, simply upload your files to the root `public_html` folder as described above.

2. **Addon Domain**:
   - If you added this as an *additional* domain to your hosting:
   - Go to **cPanel** > **Domains** (or "Addon Domains").
   - Check the **Document Root** for your domain (e.g., `public_html/yourcompany.com`).
   - Upload your `out` folder contents into *that specific folder* instead of the main `public_html`.

3. **DNS Check**:
   - Ensure your domain's **A Record** points to your specific GoDaddy Hosting IP address (found in cPanel dashboard).
