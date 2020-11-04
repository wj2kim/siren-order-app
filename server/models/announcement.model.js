const Announcement = () => {
    let announcement = '오늘은 5시 마감입니다.'
    return {
        selectAnnouncement() {
            return announcement;
        },
        replaceAnnouncement(newAnnouncement) {
            announcement = newAnnouncement;
            return announcement;
        }
    }
}

module.exports = Announcement();