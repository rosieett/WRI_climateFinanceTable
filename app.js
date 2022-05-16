$(document).ready(function () {

    document.addEventListener('sticky-change', e => {
        const header = e.detail.target; // header became sticky or stopped sticking.
        const sticking = e.detail.stuck; // true when header is sticky.
        document.querySelector('.who-is-sticking').textContent = header.textContent;
    });

    // workstreams

    $('.post2025climate_data').popover({
        placement: 'right',
        trigger: 'click',
        title: 'New Collective Quantified Goal on Climate Finance (NCQG)',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup_workstream" padding:5px">');
            var text = $('<p class="popup_p">Parties decided that, prior to 2025, the Conference of the Parties serving as the meeting of the Parties to the Paris Agreement shall set a new collective quantified goal from a floor of USD 100 billion per year, taking into account the needs and priorities of developing countries </p>');
            return mysvgdiv.append(text);

        },
    });

    $('.climate_finance_reporting_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Transparency of support',
        content: 'Transparency on climate finance flows (ex-ante and ex-post) under the UNFCCC is arranged through different reporting modalities',
    });

    $('.long_term_finance_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Long-Term Climate Finance (LTF)',
        content: 'The work programme on long-term climate finance, launched by the Conference of the Parties (COP) at its seventeenth session and extended at its eighteenth session, concluded its work at COP 19 in Warsaw. COP 26 decided that continued discussions on long-term climate finance will conclude in 2027 (source: UNFCCC site)',
    });

    $('.standing_committee_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Standing Committee on Finance (SCF)',
        content: 'At the sixteenth session of the Conference of Parties (COP), Parties decided to establish a Standing Committee on Finance to assist the COP in exercising its functions in relation to the Financial Mechanism of the Convention (source: UNFCCC site)',
    });

    $('.financial_mechanism_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Financial Mechanism of the Convention',
        content: 'To facilitate the provision of financial resources by developed country Parties to assist developing country Parties in implementing the Convention, a financial mechanism was established under the Convention to provide funds to developing country Parties. The GEF and GCF are the Operating Entities of the financial mechanism serving the Convention and the Paris Agreement',
    });

    $('.loss_damage_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Glasgow Dialogue on L&D (L&DFinance)',
        content: 'The Glasgow Dialogue was established at COP26/CMA3 to discuss arrangements for funding activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change',
    });

    $('.adaptation_finance_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Adaptation Finance',
        content: 'Adaptation finance is finance to adapt to the adverse effects and reduce the impacts of a changing climate. Under the UNFCCC there is an aim to strive for a balanced allocation of mitigation and adaptation finance',
    });

    //
    // data
    //

    $('.new_goal_submissions').popover({
        placement: 'right',
        trigger: 'click',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_submission">Submission</div>')
            var text = $('<p class="popup_p">Parties, constituted bodies under the Convention and the Paris Agreement, the operating entities of the Financial Mechanism, climate finance institutions, observers and observer organizations, and other stakeholders, particularly from the private sector, are invited to submit their views on the objectives and elements of the NCQG</p>');
            var info = $('<p class="subinfo">Date: 15 Februay 2022 <br>Mandate: 9/CMA.3 p.17 (NCQG)</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty"></span><span class="phase_fill"></span><span class="phase_empty"></span><span class="phase_empty"></span>')
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });


    $('.ted').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG. The UNFCCC Secretariat is requested to ensure the participation of all interested Parties, academia, civil society actors, including youth, and private sector actors, and that all meetings are open to observers and webcast',
    });

    $('.hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'High-level ministerial dialogues on the NCQG will be convened to ensure effective political engagement and open, meaningful and robust discussion, to be informed by the reports on the technical expert dialogues and the NCQG submissions, with a view to provide guidance on the further direction of the ad hoc work programme for the following year',
    })

    $('.technical_paper').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to prepare a technical paper on the NCQG submission',
    });

    $('.ncqg_deliberation').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The deliberations of the NCQG continue at CMA4, CMA5 and CMA6. The deliberations take stock of the progress made and provide further guidance on the ad hoc work programme. The deliberations take into consideration the annual reports of the co-chairs of the ad hoc work programme, including the key findings contained therein, and the summary reports on the HLMD, including the guidance contained therein',
    });

    $('.ted_annual_report').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The co-chairs of the ad hoc work programme are requested to prepare an annual report on the work conducted, including a summary and key findings of the technical expert dialogues for consideration by the CMA',
    });

    $('.summary_report_HLMD').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The COP President is requested to prepare a summary of the deliberation at the previous HLMD, including recommendations, for consideration of the CMA',
    });

    $('.setting_new_goal').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The deliberations on the NCQC will be concluded in 2024 by setting the Post-2025 Climate Finance Goal',
    });


    $('.95_summary_HLMD').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The COP President is requested to summarize the deliberations of the HLMD for consideration by the CMA',
    });

    $('.95_compilation_synthesis_report').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to prepare a compilation and synthesis of the 9.5 biennial communications',
    });

    $('.final_electronic_reporting_tools').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to develop reporting tools for the electronic reporting of the CTFs and make available a test version of the reporting tools by June 2023 with a view to the final version of the tools being completed by June 2024, subject to the timely availability of sufficient financial resources',
    });

    $('.synthesis_report_btrs').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to produce synthesis reports on Parties’ BTRs',
    });

    $('.95_insession_workshop').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Biennial in-session workshop on information provided by Parties in their 9.5 biennial communications',
    });

    $('.btr_web_portal').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to establish an interactive web portal to facilitate the availability of information, by parameter and by year, reported by Parties in their BTRs',
    });

    $('.5th_br').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The due date for the submission of the fifth BR by Parties included in Annex I to the Convention is moved from 1 January 2022 to as early as the annual greenhouse gas inventory submission for inventory year 2020 is provided to the UNFCCC, but no later than 31 December 2022, in order to provide Parties with the opportunity to include the inventory data in these reports',
    });

    $('.test_electronic_reporting_tools').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to develop reporting tools for the electronic reporting of the CTFs and make available a test version of the reporting tools by June 2023 with a view to the final version of the tools being completed by June 2024, subject to the timely availability of sufficient financial resources',
    });

    $('.95_insession_workshop_summary_report').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA',
    });

    $('.3rd_95_biennial_communications').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Developed country Parties are urged to submit biennial communications on ex-ante climate finance information ',
    });

    $('.2nd_95_biennial_communications').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Developed country Parties are urged to submit biennial communications on ex-ante climate finance information',
    });

    $('.95_hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'High-level ministerial dialogues on climate finance to be informed, inter alia, by the summary reports on the 9.5 in-session workshops and the 9.5 biennial communications',
    });

    $('.final_bur').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Due date for the final biennial update reports',
    });

    $('.update_of_95_guidelines').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Consideration to update the types of information to be provided by Parties in their 9.5 biennial communications on the basis of Parties’ experience and lessons learned in the preparation of their biennial communications of indicative quantitative and qualitative information',
    });

    $('.final_btrs').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Due date for the final biennial update reports',
    });

    $('.submissions_electronic_reporting_tools').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Parties are invited to submit their views on their experience with the test version of the reporting tools, including experience with integrating the tools into their national inventory arrangements, and inputs on improving the tools at the latest six months after the release of the test version',
    });



    $('.ltf_hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The COP27 Presidency is invited to organize the HLMD on climate finance and the progress and fulfillment of the goal of mobilizing jointly $100 billion per year by 2020',
    });

    $('.summary_report_ltf_hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The COP Presidency is requested to summarize the deliberations at the dialogues for consideration by the COP',
    });



    $('.climate_finance_definition').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to continue its work on definitions of climate finance, taking into account the submissions received from Parties on this matter, with a view to providing input for consideration the COP and CMA',
    });

    $('.scf_forum').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to organize the second part of the Forum of the SCF on finance for nature-based solutions',
    });

    $('.conclusion_2nd_review_scf').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The second review of the SCF should be concluded at COP28',
    });

    $('.ndr').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to prepare, every four years, a report on the determination of the needs of developing country Parties related to implementing the Convention and the Paris Agreement, for consideration by the COP and CMA. This report is formally known as the report on the determination of the needs of developing country Parties related to implementing the Convention and the Paris Agreement',
    });

    $('.submission_art_21c').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Parties, the operating entities of the Financial Mechanism, international financial institutions and other stakeholders in the financial sector are invited to submit their views regarding ways to achieve Article 2.1c, including options for approaches and guidelines for implementation'
    });

    $('.ba').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to prepare a a biennial assessment and overview of climate finance flows, to take into account relevant work by other bodies and entities on the measurement, reporting and verification of support and the tracking of climate finance. This report is formally known as the Biennial Assessment and Overview of Climate Finance Flows',
    });

    $('.information_relevant_art_21c').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to undertake further work on mapping the available information relevant to Article 2, paragraph 1(c), of the Paris Agreement, including its reference to Article 9 thereof, with a view to providing input for consideration of the COP',
    });

    $('.synthesis_relevant_art_21c').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to submit a synthesis of the submissions of views on achieving Article 2.1c for consideration of the CMA',
    });

    $('.report_100_billion_goal').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The SCF is requested to prepare a report on progress towards achieving the goal of mobilizing jointly $100 billion per year, taking into account the Climate Finance Delivery Plan and other relevant reports, for consideration by the COP',
    });

    $('.initiation_2nd_review').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The second review of the SCF will be initiated at COP27',
    });


    $('.submission_GEF_guidance').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Parties are invited to submit views and recommendations on guidance for the GEF',
    });

    $('.8th_replenishment_GEF').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The eighth replenishment of the GEF will take place after the seventh replenishment period is finalized in June 2022',
    });

    $('.7th_replenishment_finance').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The seventh review of the Financial Mechanism is set to be completed by COP27',
    });

    $('.pledging_conference_2nd_replen').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The eighth replenishment of the GEF will take place after the seventh replenishment period is finalized in June 2022',
    });

    $('.gcf_2nd_replen').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The GCF will initiate the next replenishment 30 months after the commencement of the replenishment period in order to allow sufficient time for the preparation and consideration of such reports and/or evaluations as may be necessary. Therefore, the replenishment is expected to begin in mid-2022',
    });

    $('.7th_review_financial_mechanism').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The seventh review of the Financial Mechanism is set to be completed by COP27',
    });



    $('.glasgow_dialogue_ld_finance').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The Glasgow Dialogue between Parties, relevant organizations and stakeholders is established to discuss the arrangements for the funding of activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change',
    });



    $('.submission_4th_review_af').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Parties to the Kyoto Protocol, Parties to the Paris Agreement and observer organizations, as well as other interested international organizations, stakeholders and nongovernmental organizations involved in the activities of the Adaptation Fund, and implementing entities accredited by the Adaptation Fund Board are invited to o submit their views on the fourth review of the Adaptation Fund for for consideration by the Subsidiary Body for Implementation at its fifty-sixth session (June 2022)',
    });

    $('.af_review_technical_paper').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The secretariat, in collaboration with the Adaptation Fund Board secretariat, is requested to prepare a technical paper on the fourth review of the Adaptation Fund, in accordance with the terms of reference, taking into account the deliberations and conclusions of the Subsidiary Body for Implementation at its fifty-sixth session and the submissions for consideration by the Subsidiary Body for Implementation at its fifty-seventh session',
    });

    $('.doubling_adaptation_finance').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'Developed country Parties are urged to at least double their collective provision of climate finance for adaptation to developing country Parties from 2019 levels by 2025, in the context of achieving a balance between mitigation and adaptation in the provision of scaled-up financial resources',
    });

    $('.4th_review_af').popover({
        placement: 'right',
        trigger: 'hover',
        content: 'The Subsidiary Body for Implementation is requested to complete its work on the fourth review of the Adaptation Fund at its fifty-seventh session, while welcoming the participation of Parties to the Paris Agreement, with a view to recommending a draft decision on the matter for consideration and adoption by the CMA and CMP',
    });




});