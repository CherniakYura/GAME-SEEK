import React from "react";

const Card = ({ active, alt, img, clicked }) => {
    return (
        <div
            className={`${
                active ? "leaderboard-level-container-active " : " "
            }  leaderboard-level-container `}
            onClick={clicked}
        >
            <img
                className={`${
                    active ? "leaderboard-level-image-active " : " "
                }  leaderboard-level-image`}
                src={img}
                alt={alt}
            />
            <span className="leaderboard-level-name">{alt}</span>
        </div>
    );
};

export default Card;
