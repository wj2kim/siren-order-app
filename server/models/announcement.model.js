const Announcement = () => {
    let announcement = '아메리카노 좋아 좋아 좋아'
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