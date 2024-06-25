export function totalGrade(grades) {
    if (!(grades[0].value && grades[1].value)) {
        return {
            stable: true,
            value: '--,--'
        }
    } else if ((grades[0].value && grades[1].value) && !grades[2].value) {
        if (Math.abs(grades[0].value - grades[1].value) > 3) {
            return {
                stable: false,
                value: (grades[0].value + grades[1].value) / 2
            }
        } else {
            return {
                stable: true,
                value: (grades[0].value + grades[1].value) / 2
            }
        }
    } else if (grades[2].value){
        return {
            stable: true,
            value: grades[2].value
        }
    }
}