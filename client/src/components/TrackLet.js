import React, { useRef } from "react";
import "../assets/css/components/tracklet.css";
import FileCard from "./File";
import useIsMobile from "../hooks/UseIsMobile";
import CommentCard from "./cards/CommentCard";
import hero from "../assets/images/hero.png";
const TrackLet = ({ profileImage, title, name, description, items, stats }) => {
  const isMobile=useIsMobile();
  const handleOpenPDF = () => alert("Ouverture du PDF");
  const handlePreviewPDF = () => alert("Aperçu du PDF");
  const handleDownloadPDF = () => alert("Téléchargement du PDF");
  const commentCardRef = useRef(null);

  return (
    <>
    <div className="track-card mb-4">
      {/* Profile Image */}
      <div className="user-profile">
        <img src={hero} alt="Profile" className="profile-image" />
        <span className="subscribe-icon" title="S'abonner">
          <i className="bi bi-plus"></i>
        </span>
      </div>

      {/* Tracklet Title */}
      <div className="Matiere">
        <span className="service-title mb-2">{title || "Tracklet"}</span>
      </div>

      {/* Service Name */}
      <h2 className="service-name mt-4">{name || "Nom du service"}</h2>

      {/* Service Items Grid */}
      <div className=" row ">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div className="service-item col-12 col-md-6" key={index}>

              <h3>
                <span style={{ opacity: 0.5 }} className="track-text">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {item.label}
              </h3>
              <p>{
             !isMobile && (item.description || "Description non disponible.")
              }</p>
              {item.file ? (
                item.fileType === "video" ? (
                  <FileCard
                    title={item.file.title || "Document"}
                    description={!isMobile ? (item.file.description || "Aucune description fournie.") : ""}

                    fileSize={item.file.size || "Taille inconnue"}
                    date={item.file.date || "Date inconnue"}
                    onOpen={handleOpenPDF}
                    onPreview={handlePreviewPDF}
                    onDownload={handleDownloadPDF}
                  />
                ) : (
                  <p>Type de fichier non pris en charge.</p>
                )
              ) : null}
            </div> 
          ))
        ) : (
          <p>Aucun élément disponible.</p>
        )}
      </div>

      {/* Description */}
      <p className="service-description">
        {!isMobile && (description || "Description non disponible.")}
      </p>

      {/* Stats Buttons */}
      <div className="icon-group">
        {stats && stats.length > 0
          ? stats.map((stat, index) => (
              <button className="icon-button" key={index}
              onClick={index === 0 ? () => commentCardRef.current?.() : null}
              >
                {stat.iconPath}
                <span className="icon-count">{stat.count || 0}</span>
              </button>
            ))
          : null}
      </div>
      
    </div>
    <CommentCard
    openComment={(toggleCard) => {
      commentCardRef.current = toggleCard; 
    }}
  />
  </>
  );
};

export default TrackLet;
