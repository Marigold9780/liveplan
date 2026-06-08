param(
  [int]$Port = 5173
)

$Root = Resolve-Path (Join-Path $PSScriptRoot "..")

Write-Host "LivePlan local server"
Write-Host "Root: $Root"
Write-Host "URL:  http://localhost:$Port/"

if (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server $Port --directory $Root
  exit $LASTEXITCODE
}

if (Get-Command py -ErrorAction SilentlyContinue) {
  py -m http.server $Port --directory $Root
  exit $LASTEXITCODE
}

Write-Error "Python was not found. Install Python or use another static server for this directory."
exit 1
