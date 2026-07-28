REM List of common video extensions (add more if needed)
set extensions=.mp3

for %%x in (%extensions%) do (
    for %%f in ("*%%x") do (
		ffmpeg -i "%%f" -af loudnorm=I=-14:TP=-1.0:LRA=11 "done\%%f"
	)
)

pause