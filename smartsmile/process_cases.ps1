Add-Type -AssemblyName System.Drawing

function Process-Image($srcPath, $srcX, $srcY, $srcW, $srcH, $targetW, $targetH, $destPath) {
    $src = [System.Drawing.Bitmap]::FromFile($srcPath)
    $dest = [System.Drawing.Bitmap]::new($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $srcRect = [System.Drawing.Rectangle]::new($srcX, $srcY, $srcW, $srcH)
    $destRect = [System.Drawing.Rectangle]::new(0, 0, $targetW, $targetH)

    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $g.Dispose()
    $src.Dispose()

    # Save with high quality JPEG encoder
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
    $encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, 94)

    $dest.Save($destPath, $codec, $encoderParams)
    $dest.Dispose()

    Write-Host "Generated $destPath : $([System.IO.FileInfo]::new($destPath).Length) bytes"
}

# Target: 1280 x 720 (16:9)

# Case 1: Adult Deep Bite Correction (scratch_deep_bite_corr: 1024x1024)
# Top panel (Before deep bite): y=30 to 480 (h=450), 16:9 w = 450 * 16 / 9 = 800, x offset = (1024-800)/2 = 112
Process-Image 'scratch_deep_bite_corr.jpg' 112 30 800 450 1280 720 'assets/images/cases/case-1-before.jpg'

# Bottom panel (After deep bite corrected): y=515 to 945 (h=430, completely cuts off watermark at 980+), 16:9 w = 430 * 16 / 9 = 764, x offset = (1024-764)/2 = 130
Process-Image 'scratch_deep_bite_corr.jpg' 130 515 764 430 1280 720 'assets/images/cases/case-1-after.jpg'

# Case 2: Diastema Closure (test_ok: 1500x764, test_ok_after: 1500x911)
Process-Image 'test_ok.jpg' 71 0 1358 764 1280 720 'assets/images/cases/case-2-before.jpg'
Process-Image 'test_ok_after.jpg' 0 34 1500 843 1280 720 'assets/images/cases/case-2-after.jpg'

# Case 3: Teen Severe Crowding (scratch_crowding_align: 1024x1024)
Process-Image 'scratch_crowding_align.jpg' 81 10 862 485 1280 720 'assets/images/cases/case-3-before.jpg'
Process-Image 'scratch_crowding_align.jpg' 108 520 808 455 1280 720 'assets/images/cases/case-3-after.jpg'
