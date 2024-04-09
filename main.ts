let pos = [[".", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", ".", ".", ".", "."]]
let player = "#"
let player_pos = {
    "x" : 3,
    "y" : 3,
}

let game_map = ""
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    player_pos["x"] -= 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    player_pos["x"] += 1
})
basic.forever(function on_forever() {
    for (let i = 0; i < pos.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (j != 4) {
                let game_map += " "
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
    basic.showLeds(game_map)
})
