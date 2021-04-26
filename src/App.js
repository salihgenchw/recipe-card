import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Çiğ Börek",
    date: "26 Nisan 2021, Pazartesi",
    image: "https://img.acunn.com/foto/1200x675/uploads/icerikler/2020/11/23/cigborek-tarifi12576668535fbbea763d84b.jpg",
    description:
      "Çiğ börek, kıyma, soğan ve baharat karışımının açılmış yufkaya konulup yağda kızartılmasıyla yapılan geleneksel bir Kırım Tatar yemeğidir.",
  };

  const likeCount = 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          title={recipeItem.title}
          date= {recipeItem.date}
          image = {recipeItem.image}
          description = {recipeItem.description}
          author={recipeAuthor}
          likeCount = {likeCount}
          isLiked = {isLiked}
        />
      </header>
    </div>
  );
}

export default App;
