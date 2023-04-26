import React, { useState } from "react";
let employees = [
  {
    name: "SALAMAT",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
  {
    name: "Dastan",
    surname: "anime",
    days: "Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций.",
  },
  {
    name: "Emir",
    surname: "anime",
    days: "Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. Но у нас есть отличная новость для любителей аниме! ",
  },
  {
    name: "Sheraman",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. ",
  },
  {
    name: "Albina",
    surname: "anime",
    days: "Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.",
  },
  {
    name: "Azret",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
  {
    name: "Mirdin",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
  {
    name: "Bayish",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
  {
    name: "Adilet",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
  {
    name: "Aidana",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
  {
    name: "Ilim",
    surname: "anime",
    days: "Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале.",
  },
];

const Home = () => {
  const [employeeList, setEmployeeList] = useState(employees);
  const changeDaysCount = (employee, value) => {
    let newEmp = employeeList.map((item) => {
      if (item.name === employee.name) {
        return { ...item };
      } else {
        return item;
      }
    });
    setEmployeeList(newEmp);
  };
  const changeDaysSalary = (employee, value) => {
    let newEmp = employeeList.map((item) => {
      if (item.name === employee.name) {
        return { ...item };
      } else {
        return item;
      }
    });
    setEmployeeList(newEmp);
  };
  return (
    <div>
      <img
        style={{
          width: "1500px",
          zIndex: "3",
        }}
        src="https://m.economictimes.com/thumb/msid-96551372,width-1643,height-924,resizemode-4,imgsize-36540/bleach-tybw-is-now-the-top-rated-anime-after-its-finale-aired-details-here.jpg"
        alt=""
      />
      <table
        style={{
          backgroundColor: "orange",
        }}
      >
        <thead>
          <tr>
            <th>
              Name <hr />
            </th>
            <th>
              Categori <hr />
            </th>
            <th
              style={{
                paddingLeft: "30px",
              }}
            >
              Soderjimoe <hr />
            </th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((item) => (
            <tr key={item.name}>
              <td>
                {item.name} <hr />
              </td>
              <td>
                {item.surname} <hr />
              </td>
              <td>
                {item.days} <hr />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
