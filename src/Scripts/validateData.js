const validateData = (student) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (student.name === '') {
        alert('Name required!')
        return false
    }
    else if (student.email === '') {
        alert('Email required!')
        return false
    }
    else if (!String(student.email).match(validRegex)) {
        alert('Wrong email!')
        return false
    }
    else if (student.year === '') {
        alert('Year required!')
        return false
    }
    else if (parseInt(student.year) < 1980 || parseInt(student.year) > 2023) {
        alert('Year out of range!')
        return false
    }
    else {
        return true
    }
}

export default validateData;