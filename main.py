pos = [
[".",".",".",".","."],
[".",".",".",".","."],
[".",".",".",".","."],
[".",".",".",".","."],
[".",".",".",".","."],
]
player = "#"

player_pos = {"x": 3, "y": 3}

game_map = ""

for i in range(pos.length):
    for j in range(5):
        if j != 4:
            game_map += " "
        if j == player_pos["x"] and i == player_pos["y"]:
            game_map += player
        else:
            game_map += pos[i][j]

    if i != (pos.length-1):
        game_map += "\n"


def on_button_pressed_a():
    player_pos

def on_forever():
    basic.show_leds(game_map)

input.on_button_pressed(Button.A, on_button_pressed_a)
basic.forever(on_forever)
