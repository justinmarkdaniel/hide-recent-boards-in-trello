# Hide Recent Boards in Trello

Chrome extension that hides the "Recently Viewed" boards section on Trello.

## Installation

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder

## Files

```
trello-hide-recent-boards/
  manifest.json   # Extension config
  content.js      # Hides the section
  styles.css      # CSS rules
```

## How It Works

The extension finds the "Recently Viewed" heading and hides its parent container. It re-runs on SPA navigation to handle Trello's dynamic page loads.

## License

Personal, non-commercial use only. See [LICENSE](LICENSE).
