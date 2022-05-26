$(document).ready(function () {

    document.addEventListener('sticky-change', e => {
        const header = e.detail.target; // header became sticky or stopped sticking.
        const sticking = e.detail.stuck; // true when header is sticky.
        document.querySelector('.who-is-sticking').textContent = header.textContent;
    });

    // workstreams
    //‘Formally known as: ‘name’ (acronym)’

    $('.post2025climate_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Formally known as: New Collective Quantified Goal on Climate Finance (NCQG)',
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
        title: 'Formally known as: Transparency of support',
        content: 'Transparency on climate finance flows (ex-ante and ex-post) under the UNFCCC is arranged through different reporting modalities',
    });

    $('.long_term_finance_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Formally known as: Long-Term Climate Finance (LTF)',
        content: 'The work programme on long-term climate finance, launched by the Conference of the Parties (COP) at its seventeenth session and extended at its eighteenth session, concluded its work at COP 19 in Warsaw. COP 26 decided that continued discussions on long-term climate finance will conclude in 2027 (source: UNFCCC site)',
    });

    $('.standing_committee_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Formally known as: Standing Committee on Finance (SCF)',
        content: 'At COP16, Parties decided to establish a Standing Committee on Finance to assist the COP in exercising its functions in relation to the Financial Mechanism of the Convention',
    });

    $('.financial_mechanism_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Formally known as: Financial Mechanism of the Convention',
        content: 'The Convention established a financial mechanism to provide funds to developing country Parties to assist them in implementing the Convention. The GEF and GCF are the Operating Entities of the financial mechanism serving the Convention and the Paris Agreement',
    });

    $('.loss_damage_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Formally known as: Glasgow Dialogue on L&D (L&DFinance)',
        content: 'The Glasgow Dialogue was established at COP26/CMA3 to discuss arrangements for funding activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change',
    });

    $('.adaptation_finance_data').popover({
        placement: 'right',
        trigger: 'hover',
        title: 'Formally known as: Adaptation Finance',
        content: 'Adaptation finance is finance to adapt to the adverse effects and reduce the impacts of a changing climate. Under the UNFCCC there is an aim to strive for a balanced allocation of mitigation and adaptation finance',
    });

    //
    // data
    //

    $('.new_goal_submissions').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_submission">Submission</div>')
            var text = $('<p class="popup_p">Parties, constituted bodies under the Convention and the Paris Agreement, the operating entities of the Financial Mechanism, climate finance institutions, observers and observer organizations, and other stakeholders, particularly from the private sector, are invited to submit their views on the objectives and elements of the NCQG</p>');
            var info = $('<p class="subinfo">Date: 15 Februay 2022 <br>Mandate: 9/CMA.3 p.17</p>');
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
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
            var info = $('<p class="subinfo">Date: 22-23 March 2022 <br>Mandate: 9/CMA.3 p.5</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">High-level ministerial dialogues on the NCQG will be convened to ensure effective political engagement and open, meaningful and robust discussion, to be informed by the reports on the technical expert dialogues and the NCQG submissions, with a view to provide guidance on the further direction of the ad hoc work programme for the following year</p>');
            var info = $('<p class="subinfo">Mandate: 9/CMA.3 p.10</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.technical_paper').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a technical paper on the NCQG submission</p>');
            var info = $('<p class="subinfo">Mandate: 9/CMA.3 p.18</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.ncqg_deliberation').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deliberation">Deliberation</div>')
            var text = $('<p class="popup_p">The deliberations of the NCQG continue at CMA4, CMA5 and CMA6. The deliberations take stock of the progress made and provide further guidance on the ad hoc work programme. The deliberations take into consideration the annual reports of the co-chairs of the ad hoc work programme, including the key findings contained therein, and the summary reports on the HLMD, including the guidance contained therein</p>');
            var info = $('<p class="subinfo">Mandate: 9/CMA.3 p.12</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.ted_annual_report').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The co-chairs of the ad hoc work programme are requested to prepare an annual report on the work conducted, including a summary and key findings of the technical expert dialogues for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Mandate: 9/CMA.3 p.9</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.summary_report_HLMD').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The COP President is requested to prepare a summary of the deliberation at the previous HLMD, including recommendations, for consideration of the CMA</p>');
            var info = $('<p class="subinfo">Mandate: 9/CMA.3 p.9</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.setting_new_goal').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The deliberations on the NCQC will be concluded in 2024 by setting the Post-2025 Climate Finance Goal</p>');
            var info = $('<p class="subinfo">Date: End of 2024 <br>Mandate: 9/CMA.3 p.22</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.95_summary_HLMD').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>');
            var text = $('<p class="popup_p">The COP President is requested to summarize the deliberations of the HLMD for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Mandate: 12/CMA.1 p.11</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span><span class= "phase_empty report"></span><span class="phase_empty report"></span><span class="phase_fill report"></span><span class="phase_empty report">');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.compilation_synthesis_5th_BRs').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a compilation and synthesis report on the information reported by developed country Parties in the biennial reports for consideration of the COP</p>');
            var info = $('<p class="subinfo">Mandate: 2/CP.17 p.21</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty"></span><span class="phase_fill report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.95_compilation_synthesis_report').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The COP President is requested to summarize the deliberations of the HLMD for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Mandate: 12/CMA.1 p.11</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span><span class="phase_empty report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.final_electronic_reporting_tools').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to develop reporting tools for the electronic reporting of the CTFs and make available a test version of the reporting tools by June 2023 with a view to the final version of the tools being completed by June 2024, subject to the timely availability of sufficient financial resources</p>');
            var info = $('<p class="subinfo">Date: By June 2024 <br>Mandate: 5/CMA.3 p.8</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.synthesis_report_btrs').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to produce synthesis reports on Parties’ BTRs</p>');
            var info = $('<p class="subinfo">Date: By June 2024 <br>Mandate: 18/CMA.1 p.6a</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span><span class="phase_empty report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.95_insession_workshop').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">Biennial in-session workshop on information provided by Parties in their 9.5 biennial communications </p>');
            var info = $('<p class="subinfo">Mandate: 14/CMA.3 p.9 & 12/CMA.1 p.8</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty meeting"></span><span class="phase_empty meeting"></span><span class="phase_empty meeting"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.btr_web_portal').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to establish an interactive web portal to facilitate the availability of information, by parameter and by year, reported by Parties in their BTRs</p>');
            var info = $('<p class="subinfo">Date: December 2024 <br>Mandate: 5/CMA.3 p.22-23</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.5th_br').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The due date for the submission of the fifth BR by Parties included in Annex I to the Convention is moved from 1 January 2022 to as early as the annual greenhouse gas inventory submission for inventory year 2020 is provided to the UNFCCC, but no later than 31 December 2022, in order to provide Parties with the opportunity to include the inventory data in these reports</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2022 <br>Mandate: 2/CP.17 p.13 & 1/CP.24 p.38</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.test_electronic_reporting_tools').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The due date for the submission of the fifth BR by Parties included in Annex I to the Convention is moved from 1 January 2022 to as early as the annual greenhouse gas inventory submission for inventory year 2020 is provided to the UNFCCC, but no later than 31 December 2022, in order to provide Parties with the opportunity to include the inventory data in these reports</p>');
            var info = $('<p class="subinfo">Date: By June 2023<br>Mandate: 5/CMA.3 p.8</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.95_insession_workshop_summary_report').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Mandate: 12/CMA.1 p.8</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span><span class="phase_empty report"></span><span class="phase_empty report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.3rd_95_biennial_communications').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2024 <br>Mandate: 12/CMA.1 p.2</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty deadline"></span>')
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.2nd_95_biennial_communications').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>');
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2022 <br>Mandate: 14/CMA.3 p.5</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty deadline"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.95_hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2022 <br>Mandate: 12/CMA.1 p.10</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty meeting"></span><span class= "phase_empty meeting"></span><span class= "phase_empty meeting"></span><span class="phase_empty meeting"></span><span class="phase_fill meeting"></span><span class="phase_empty meeting"></span>')
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.final_bur').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">Due date for the final biennial update reports</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2024<br>Mandate: 2/CP.17 p.13 & 6/CP25 p.3</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span>')
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .appen(phase);
        },
    });

    $('.update_of_95_guidelines').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deliberation">Deliberation</div>')
            var text = $('<p class="popup_p">Due date for the final biennial update reports</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2024 <br>Mandate: 2/CP.17 p.13 & 6/CP25 p.3</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty deliberation"></span><span class= "phase_empty deliberation"></span><span class= "phase_empty deliberation"></span><span class="phase_empty deliberation"></span><span class="phase_empty deliberation"></span><span class="phase_empty deliberation"><span class="phase_empty deliberation">');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.final_btrs').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">Due date for the final biennial update reports</p>');
            var info = $('<p class="subinfo">Date: No later than 31 December 2024 <br>Mandate: 2/CP.17 p.13 & 6/CP25 p.3</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.submissions_electronic_reporting_tools').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_submission">Submission</div>')
            var text = $('<p class="popup_p">Parties are invited to submit their views on their experience with the test version of the reporting tools, including experience with integrating the tools into their national inventory arrangements, and inputs on improving the tools at the latest six months after the release of the test version</p>');
            var info = $('<p class="subinfo">Date: By December 2023 <br>Mandate: 5/CMA.3 p.10</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.ltf_hlmd').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">The COP27 Presidency is invited to organize the HLMD on climate finance and the progress and fulfillment of the goal of mobilizing jointly $100 billion per year by 2020</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.26 p.21</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.hlmd_summary_report_ltf').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The COP Presidency is requested to summarize the deliberations at the dialogues for consideration by the COP</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.26 p.20</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.first_btrs').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">Submission of first BTRs in accordance with the MPGs</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.26 p.20</p>')
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span><span class="phase_empty"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });


    $('.climate_finance_definition').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The SCF is requested to continue its work on definitions of climate finance, taking into account the submissions received from Parties on this matter, with a view to providing input for consideration the COP and CMA</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.26 p.12 & 10/CMA.3 p.3</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.scf_forum').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">The SCF is requested to organize the second part of the Forum of the SCF on finance for nature-based solutions</p>');
            var info = $('<p class="subinfo">Mandate: 5/CP.26 p.23</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.conclusion_2nd_review_scf').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The SCF is requested to organize the second part of the Forum of the SCF on finance for nature-based solutions</p>');
            var info = $('<p class="subinfo">11/CP.25 p.17</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.ndr').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The SCF is requested to prepare, every four years, a report on the determination of the needs of developing country Parties related to implementing the Convention and the Paris Agreement, for consideration by the COP and CMA. This report is formally known as the report on the determination of the needs of developing country Parties related to implementing the Convention and the Paris Agreement</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.24 p.13</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.submission_art_21c').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_submission">Submission</div>')
            var text = $('<p class="popup_p">Parties, the operating entities of the Financial Mechanism, international financial institutions and other stakeholders in the financial sector are invited to submit their views regarding ways to achieve Article 2.1c, including options for approaches and guidelines for implementation</p>');
            var info = $('<p class="subinfo">Date: by 30 April 2022 <br>Mandate: 10/CMA.3 p.2</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.ba').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The SCF is requested to prepare a a biennial assessment and overview of climate finance flows, to take into account relevant work by other bodies and entities on the measurement, reporting and verification of support and the tracking of climate finance. This report is formally known as the Biennial Assessment and Overview of Climate Finance Flows</p>');
            var info = $('<p class="subinfo">Mandate: 1/CP.18 p.71</p>');
            var phase = $('<div class="phase_area"><p class="phase_p">Phase: </p><div class="phase_area_group"><span class="phase_empty report"></span>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info)
                .append(phase);
        },
    });

    $('.information_relevant_art_21c').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The SCF is requested to undertake further work on mapping the available information relevant to Article 2, paragraph 1(c), of the Paris Agreement, including its reference to Article 9 thereof, with a view to providing input for consideration of the COP</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.26 p.13</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.synthesis_relevant_art_21c').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The SCF is requested to submit a synthesis of the submissions of views on achieving Article 2.1c for consideration of the CMA</p>');
            var info = $('<p class="subinfo">Mandate: 10/CMA.3 p.2</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.report_100_billion_goal').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The SCF is requested to prepare a report on progress towards achieving the goal of mobilizing jointly $100 billion per year, taking into account the Climate Finance Delivery Plan and other relevant reports, for consideration by the COP</p>');
            var info = $('<p class="subinfo">Mandate: 4/CP.26 p.19</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.initiation_2nd_review').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deliberation">Deliberation</div>')
            var text = $('<p class="popup_p">The second review of the SCF will be initiated at COP27</p>');
            var info = $('<p class="subinfo">Mandate: 11/CP.25 p.17</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.submission_GEF_guidance').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">Parties are invited to submit views and recommendations on guidance for the GEF</p>');
            var info = $('<p class="subinfo">Date: 10 weeks before COP27<br>Mandate: 7/CP.26 p.19</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.8th_replenishment_GEF').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The eighth replenishment of the GEF will take place after the seventh replenishment period is finalized in June 2022</p>');
            var info = $('<p class="subinfo">Mandate: 6/CP.24 p.2</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.7th_replenishment_finance').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deliberation">Deliberation</div>')
            var text = $('<p class="popup_p">The seventh review of the Financial Mechanism is set to be completed by COP27</p>');
            var info = $('<p class="subinfo">Mandate: 11/CP.23 p.4</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.pledging_conference_2nd_replen').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">The eighth replenishment of the GEF will take place after the seventh replenishment period is finalized in June 2022</p>');
            var info = $('<p class="subinfo">Date: Expeded in mid-2023<br>Mandate: 6/CP.26 p.3c</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.gcf_2nd_replen').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deliberation">Deliberation</div>')
            var text = $('<p class="popup_p">The GCF will initiate the next replenishment 30 months after the commencement of the replenishment period in order to allow sufficient time for the preparation and consideration of such reports and/or evaluations as may be necessary. Therefore, the replenishment is expected to begin in mid-2022</p>');
            var info = $('<p class="subinfo">Date:Expected to begin mid-2022<br>Mandate: 6/CP.26 p.3c</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.7th_review_financial_mechanism').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deliberation">Deliberation</div>')
            var text = $('<p class="popup_p">The seventh review of the Financial Mechanism is set to be completed by COP27</p>');
            var info = $('<p class="subinfo">Mandate: 11/CP.23 p.4</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.glasgow_dialogue_ld_finance').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">The Glasgow Dialogue between Parties, relevant organizations and stakeholders is established to discuss the arrangements for the funding of activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change</p>');
            var info = $('<p class="subinfo">Mandate: 1/CMA.3 p.73</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.submission_4th_review_af').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_meeting">Meeting</div>')
            var text = $('<p class="popup_p">Parties to the Kyoto Protocol, Parties to the Paris Agreement and observer organizations, as well as other interested international organizations, stakeholders and nongovernmental organizations involved in the activities of the Adaptation Fund, and implementing entities accredited by the Adaptation Fund Board are invited to o submit their views on the fourth review of the Adaptation Fund for for consideration by the Subsidiary Body for Implementation at its fifty-sixth session (June 2022)</p>');
            var info = $('<p class="subinfo">Date: 31-Mar-22<br>Mandate: 4/CMP.16 p.3</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.af_review_technical_paper').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_report">Report</div>')
            var text = $('<p class="popup_p">The secretariat, in collaboration with the Adaptation Fund Board secretariat, is requested to prepare a technical paper on the fourth review of the Adaptation Fund, in accordance with the terms of reference, taking into account the deliberations and conclusions of the Subsidiary Body for Implementation at its fifty-sixth session and the submissions for consideration by the Subsidiary Body for Implementation at its fifty-seventh session</p>');
            var info = $('<p class="subinfo">Mandate: 4/CMP.16 p.5</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.doubling_adaptation_finance').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">Developed country Parties are urged to at least double their collective provision of climate finance for adaptation to developing country Parties from 2019 levels by 2025, in the context of achieving a balance between mitigation and adaptation in the provision of scaled-up financial resources</p>');
            var info = $('<p class="subinfo">Mandate: 1/CMA.3 p.18</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });

    $('.4th_review_af').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: function () {
            var mysvgdiv = $('<div class="popup" padding:5px"></div>');
            var milestone = $('<div class="popup_deadline">Deadline</div>')
            var text = $('<p class="popup_p">The Subsidiary Body for Implementation is requested to complete its work on the fourth review of the Adaptation Fund at its fifty-seventh session, while welcoming the participation of Parties to the Paris Agreement, with a view to recommending a draft decision on the matter for consideration and adoption by the CMA and CMP</p>');
            var info = $('<p class="subinfo">Mandate: 4/CMP.16 p.6</p>');
            return mysvgdiv.append(milestone)
                .append(text)
                .append(info);
        },
    });



});