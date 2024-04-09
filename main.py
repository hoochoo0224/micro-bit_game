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

def on_forever():
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

    basic.show_leds(game_map)

def on_button_pressed_a():
    player_pos["x"] -= 1

def on_button_pressed_b():
    player_pos["x"] += 1

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
basic.forever(on_forever)
