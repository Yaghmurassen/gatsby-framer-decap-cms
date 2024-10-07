import React, { useState } from "react";

const DecisionCard = ({ decision }) => {
  const [showDecision, setShowDecision] = useState(false);

  console.log("decision from DecisionCard", decision, typeof decision);

  const openDecision = () =>
    setShowDecision((showDecision) => {
      return !showDecision;
    });

  if (decision) {
    return (
      <div className="card blog-list-item max-xs:p-4 p-12 grid grid-cols-1 mb-8">
        <h3 className="mb-6 italic font-bold">{decision.title}</h3>
        <img
          src={decision.img}
          alt={decision.alt}
          className="mb-8 mx-auto rounded-md max-w-60 max-md2:max-w-full "
        />
        <p className="text-sm">{decision.description}</p>

        <a
          className="underline text-blue-600 my-4 text-sm italic font-semibold"
          href={decision.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          {decision.link}
        </a>

        <button
          onClick={openDecision}
          className="my-4 p-4 bg-[#016775] rounded-md text-white font-bold"
        >
          {showDecision ? <span>Cacher</span> : <span>Voir</span>} la décision
        </button>
        {showDecision && (
          <div className="h-[100vh]">
            <object
              data={decision.pdf}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Unable to display PDF file.
                <a
                  className="font-bold italic"
                  href={decision.pdf}
                  download
                  rel="noreferrer noopener"
                >
                  {" "}
                  Download{" "}
                </a>
                instead.
              </p>
            </object>
          </div>
        )}
      </div>
    );
  } else {
    return <h1>tu l'as dans l'uk</h1>;
  }
};

export default DecisionCard;
