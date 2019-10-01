let cvar = 5
let prepa = 0// run the preparation algorighm 1 - yes, 0 - no
let color = Colors.Green//your color (Green, Yellow...)
//Cvar Explantion
//cvar is a variable that controls the runagent or what the robot will do
//states: 0 - Move forward 20, 1 - turn 90 to the right, 2 - dash forward 100, 3 - Turn 90 to the left, 4 - go back 25 cm, 5 - turn 180
//If your robot turns red you did something wrong














let x: string[] = []
x = ["yeet", "a"]
function runagent() {
    if (cvar == 0) {
        actions.move(25, 20)
    } else if (cvar == 1) {
        actions.turn(90)
    } else if (cvar == 2) {
        actions.move(100, 1000)
    } else if (cvar == 3) {
        actions.turn(-90)
    } else if (cvar == 4) {
        actions.move(-25, 20)
    } else if (cvar == 5) {
        actions.turn(180)
    } else {
        actions.setLightColor(Lights.All, actions.colors(Colors.Red))
        actions.playSound(Sounds.Expression_Laugh)
    }
}
function prep() {
    if (prepa == 1) {
        actions.setFacePattern('100011111000', 255)
        actions.setLightColor(Lights.All, color)
    }
}
prep()
runagent()
// on start












color = actions.colors(Colors.Green)
cvar = 9
