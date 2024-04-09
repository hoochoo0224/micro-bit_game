let pos = [[".", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", ".", ".", ".", "."]]
let player = "#"
let player_pos = {
    "x" : 3,
    "y" : 3,
}

let game_map = ""
for (let i = 0; i < pos.length; i++) {
    for (let j = 0; j < 5; j++) {
        if (j != 4) {
            game_map += " "
        }
        
        if (j == player_pos["x"] && i == player_pos["y"]) {
            game_map += player
        } else {
            game_map += pos[i][j]
        }
        
    }
    if (i != pos.length - 1) {
        game_map += "\n"
    }
    
}
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    player_pos
})
basic.forever(function on_forever() {
    basic.showLeds(game_map)
})
