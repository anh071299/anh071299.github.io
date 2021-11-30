const films = [
    {
        id: 1,
        title: "Hạnh Phúc: Chung Cư Có Độc - Nắm Giữ Sinh Mệnh (Happiness 2021)",
        image: "../images/film1.jpg",
        rating: 3
    },
    {
        id: 2,
        title: "Ngự Sử Tài Ba Và Quý Cô Thông Thái - Jo Yi Và Ám Hành Ngự Sử",
        image: "../images/film2.jpg",
        rating: 4
    },
]

const getFilmById = (id) => films.find(f => f.id == id);
export {getFilmById}; 
export default films