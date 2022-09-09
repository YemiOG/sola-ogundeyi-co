import React from "react";

const Advisory = () => {
  return (
    <div className="px-3 md:px-10">
      <div className="max-w-[1240px] mx-auto text-left ">
        <h1 className="text-bold text-2xl p-3 md:text-3xl">
          Financial Advisory Services
        </h1>
        <blockquote className="md:text-xl">
          <p className="p-3 md:text-xl">
            Meeting statutory and regulatory obligations and satisfying
            increasing stakeholders’ interest demands for strong corporate
            governance but this continues to provide challenges for many
            organisations. Compliance mistakes and omissions can expose firms to
            penalties. The potential business and reputational risks can be
            significant.
          </p>

          <p className="mx-3 mb-4">
            Our financial advisory group can assist you to meet these challenges
            with the following services:
          </p>
          <ul>
            <li className="px-6 mb-4">
              <h3 className="mb-0 px-3 font-bold">
                Statutory Compliance Services
              </h3>
              <p className="px-3">
                We assist in maintaining statutory books, handling of filing of
                annual returns, recording of minutes and attending to Corporate
                Affairs Commissions’ filing requirements.
              </p>
            </li>
            <li className="px-6 mb-4">
              <h3 className="mb-0 px-3 font-bold">Advisory Services</h3>
              <p className="px-3">
                We assist in company formations, registration of liaison and
                branch offices. We also liaise with Corporate Affairs Commission
                and other regulatory authorities to obtain approval for foreign
                and/or local investment, concessions, and incentives. We help in
                identifying suitable locations and also in registering Trade
                mark.
              </p>
            </li>
            <li className="px-6 mb-4">
              <h3 className="mb-0 px-3 font-bold">
                Reporting Accounting Services
              </h3>
              <p className="px-3">
                We act as reporting accountants to capital raising issues. This
                involves reviewing of the past financial statements for the
                purpose of reporting on the accounting policies and the accounts
                as well as reviewing prepared financial forecasts, budgets, cash
                flow statements and other financial reports that may be required
                by capital market regulatory authorizes for the purpose of
                offering filing.
              </p>
            </li>
            <li className="px-6 mb-4">
              <h3 className="mb-0 px-3 font-bold">Debt Recovery Services</h3>
              <p className="px-3">
                The economic downturn has led to signs of business failures and
                weakened asset quality. Receivables have built up in the books
                of manufacturing and banking concerns and to inject liquidity
                into the business, these assets must be recovered before they
                become totally impaired and uncollectible.
              </p>
            </li>
          </ul>
        </blockquote>
      </div>
    </div>
  );
};

export default Advisory;
