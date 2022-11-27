basic.showIcon(IconNames.Happy)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 100)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 15)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
    }
})
