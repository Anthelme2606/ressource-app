import PageLayout from "../layouts/PageLayout";
import TrackLayout from "../layouts/TrackLayout";
import TrackLet from "../components/TrackLet";
import "../assets/css/pages/track-opedie.css";
import TrackLetContainer from "../components/TrackLetContainer";
const Trackopedie = () => {
  
  const Icon1 = () => <i className="bi bi-chat custom-icon"></i>;

  
  const Icon2 = () => (
    <i
      className="bi bi-download custom-icon"
    ></i>
  );
  
  const Icon3 = () => (
    <i
      className="bi bi-heart custom-icon"
    ></i>
  );
  
  const Icon4 = () => (
    <i
      className="bi bi-flag custom-icon"
    ></i>
  );
  
  const trackletsData = [
    {
      profileImage: "https://via.placeholder.com/50",
      title: "Tracklet 1",
      name: "Examen de mathématiques 2024",
      description:
      "Lorem ipsum dolor sit amet, ",
       items: [
        {
          label: "Examen",
          description: "Lorem ipsum dolor ",
          file: "https://www.w3schools.com/html/mov_bbb.mp4",
          fileType: "video",
        },
        {
          label: "Corrigé",
          description: "Lorem ipsum dolor sit amet",
          file: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
          fileType: "video",
        },
      ],
      stats: [
        { iconPath: <Icon1 />, count: 5 },
        { iconPath: <Icon2 />, count: 120 },
        { iconPath: <Icon3 />, count: 20 },
        { iconPath: <Icon4 />, count: 3 },
      ],
    },
    {
      profileImage: "https://via.placeholder.com/50",
      title: "Tracklet 2",
      name: "Histoire - Évaluation finale",
      description:
        "Découvrez les grandes lignes de l'histoire et testez vos connaissances.",
      items: [
        {
          label: "Document 1",
          description: "Le résumé de la période médiévale.",
          file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          fileType: "video",
        },
        {
          label: "Document 2",
          description: "Les événements marquants de la Renaissance.",
          file: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
          fileType: "video",
        },
      ],
      stats: [
        { iconPath: <Icon1 />, count: 12 },
        { iconPath: <Icon2 />, count: 240 },
        { iconPath: <Icon3 />, count: 40 },
        { iconPath: <Icon4 />, count: 7 },
      ],
    },
    {
      profileImage: "https://via.placeholder.com/50",
      title: "Tracklet 3",
      name: "Sciences physiques - TP n°2",
      description:
        "Expérimentez ",
      items: [
        {
          label: "Expérience 1",
          description: "Le mouvement des projectiles.",
          file: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4",
          fileType: "video",
        },
        {
          label: "Expérience 2",
          description: "Les lois de Newton.",
          file: "https://www.w3schools.com/html/movie.mp4",
          fileType: "video",
        },
      ],
      stats: [
        { iconPath: <Icon1 />, count: 8 },
        { iconPath: <Icon2 />, count: 95 },
        { iconPath: <Icon3 />, count: 15 },
        { iconPath: <Icon4 />, count: 2 },
      ],
    },
    {
      profileImage: "https://via.placeholder.com/50",
      title: "Tracklet 4",
      name: "Littérature - Lecture analytique",
     description:
        "Analyse d'une œuvre majeure ",
      items: [
        {
          label: "Lecture",
          description: "L'étude du chapitre 5.",
          file: "https://www.example.com/sample-text.txt",
          fileType: "video",
        },
        {
          label: "Analyse",
          description: "Les figures de style utilisées dans l'œuvre.",
          file: "https://www.example.com/sample-analysis.pdf",
          fileType: "video",
        },
      ],
      stats: [
        { iconPath: <Icon1 />, count: 3 },
        { iconPath: <Icon2 />, count: 50 },
        { iconPath: <Icon3 />, count: 10 },
        { iconPath: <Icon4 />, count: 1 },
      ],
    },
  ];
  
  
  return (
    <PageLayout title="Trackopédie">
      <TrackLayout>
        <div className="track-container">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Rechercher..."
              class="form-control"
            />
            <span className="filter-icon ms-2">
              <i className="bi bi-sliders">
              </i>
            </span>
          </div>
          <TrackLetContainer tracklets={trackletsData} />
        </div>
      </TrackLayout>
    </PageLayout>
  );
};

export default Trackopedie;
