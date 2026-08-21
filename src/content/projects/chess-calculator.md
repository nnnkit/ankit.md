---
title: The Chess Calculator
date: 2026-08-18
summary: Free Stockfish 18 calculators in the browser. The first one finds the next best move and never uploads the position.
status: live
url: https://thechesscalculator.com
---

A set of free chess calculators. The first one is a best-move finder that runs
Stockfish 18 in the tab. Paste a FEN or set the pieces. The move shows up in
the largest type on the page.

## Why

Most chess calculators are analysis boards with an engine tucked in a sidebar.
I wanted the actual answer, the best move, to be the thing you see first. The
position stays on your machine. Illegal FENs get named, not silently rewritten
into a different game.

## What it does

- Paste a FEN or drag pieces on the board.
- Stockfish 18 runs as WebAssembly in the tab. Nothing is sent to a server.
- The best move appears as soon as the engine has one, then gets stronger as
  depth climbs.
- Three candidate lines, with eval in pawns and the depth you actually got.
- Messy FENs from chat get trimmed and repaired in the open. An illegal
  position is named, not analysed as something else.
- On a phone the search stops after a few seconds so you are not left waiting.

## What it is not

This is for study, puzzles you already finished, or a game after it ended.
Using an engine while you play is cheating on chess.com, Lichess, and over the
board.
