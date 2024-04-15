import React, { useState } from "react";

const SocialLinks = ({ prevSavedDetails, saveDetails, prev, next }) => {
  const [SocialLinks, setSocialLinks] = useState({
    facebook: prevSavedDetails.facebook || "",
    instagram: prevSavedDetails.instagram || "",
    twitter: prevSavedDetails.twitter || "",
    linkedin: prevSavedDetails.linkedin || "",
    youtube: prevSavedDetails.youtube || "",
  });
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [youtubeVideos, setYoutubeVideos] = useState(prevSavedDetails.youtubeVideos || []);
  return (
    <div className="card">
      <div className="card-header">
        <h4>Social Links</h4>
      </div>
      <div className="form-group">
        <label htmlFor="fackbook">
          Facebook <span>*</span>
        </label>
        <input
          type="text"
          id="facebook"
          className="form-control pass-input"
          value={SocialLinks.facebook}
          onChange={(e) => setSocialLinks({ ...SocialLinks, facebook: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="instagram">
          Instagram <span>*</span>
        </label>
        <input
          type="text"
          id="instagram"
          className="form-control pass-input"
          value={SocialLinks.instagram}
          onChange={(e) => setSocialLinks({ ...SocialLinks, instagram: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="twitter">
          Twitter <span>*</span>
        </label>
        <input
          type="text"
          id="twitter"
          className="form-control pass-input"
          value={SocialLinks.twitter}
          onChange={(e) => setSocialLinks({ ...SocialLinks, twitter: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">
          LinkedIn <span>*</span>
        </label>
        <input
          type="text"
          id="linkedin"
          className="form-control pass-input"
          value={SocialLinks.linkedin}
          onChange={(e) => setSocialLinks({ ...SocialLinks, linkedin: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="youtube">
          Youtube <span>*</span>
        </label>
        <input
          type="text"
          id="youtube"
          className="form-control pass-input"
          value={SocialLinks.youtube}
          onChange={(e) => setSocialLinks({ ...SocialLinks, youtube: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="youtubeVideos">
          Youtube Videos <span>*</span>
        </label>
        <input type="text" id="youtubeVideos" className="form-control pass-input" onChange={(e) => setYoutubeVideo(e.target.value)} />
        <button type="button" className="btn btn-primary" 
          onClick={() => {() =>{ setYoutubeVideos([...youtubeVideos, youtubeVideo]); setYoutubeVideo("")}}}
        >
          Add
        </button>
        <ul>
          {youtubeVideos.map((video, index) => (
            <li key={index}>
              <span>{video}</span>
              <button type="button" className="btn btn-primary" 
               onClick={() => setYoutubeVideos(youtubeVideos.filter((_, i) => i !== index))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-group">
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() => (saveDetails(SocialLinks), prev())}
        >
          <span>Previous</span>
        </button>{" "}
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() => (saveDetails(SocialLinks), next())}
        >
          <span>Save & Next</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
