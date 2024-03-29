var $ = jQuery;

$(document).ready(function () {

        document.addEventListener('sticky-change', e => {
            const header = e.detail.target; // header became sticky or stopped sticking.
            const sticking = e.detail.stuck; // true when header is sticky.
            document.querySelector('.who-is-sticking').textContent = header.textContent;
        })

        // workstreams

        $('.post2025climate_data').popover({
            placement: 'right',
            trigger: 'hover',
            title: 'Formally known as: New Collective Quantified Goal on Climate Finance (NCQG)',
            content: 'Parties decided that, prior to 2025, the Conference of the Parties serving as the meeting of the Parties to the Paris Agreement shall set a new collective quantified goal from a floor of USD 100 billion per year, taking into account the needs and priorities of developing countries'
        });

        $('.climate_finance_reporting_data').popover({
            placement: 'right',
            trigger: 'hover',
            title: 'Formally known as: Transparency of support',
            content: 'Transparency on climate finance flows (ex-ante and ex-post) under the UNFCCC is arranged through different reporting modalities'
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
        // events 
        // 

        $('#legend_deadline').popover({
            placement: 'right',
            trigger: 'hover',
            content: 'Deadline to finalize a mandate process or to meet a commitment',
        });

        $('#legend_submission').popover({
            placement: 'right',
            trigger: 'hover',
            content: 'Request for Parties and other stakeholders to submit their view on a certain topic',
        });

        $('#legend_meeting').popover({
            placement: 'right',
            trigger: 'hover',
            content: 'Mandated meeting of the Parties and invited stakeholders to discuss a certain topic, including dialogues, workshops and meetings of the constituted bodies such as the SCF',
        });

        $('#legend_deliberation').popover({
            placement: 'right',
            trigger: 'hover',
            content: 'Mandated discussions for the Parties to be held during the COP, CMA or SBs ',
        });

        $('#legend_report').popover({
            placement: 'right',
            trigger: 'hover',
            content: 'Report produced by the UNFCCC secretariat, one of the UNFCCC bodies or by the Parties',
        });



        //
        // data
        //



        $('#new_goal_submissions_22q1').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_submission">Submission</div>')
                var text = $('<p class="popup_p">Parties, constituted bodies under the Convention and the Paris Agreement, the operating entities of the Financial Mechanism, climate finance institutions, observers and observer organizations, and other stakeholders, particularly from the private sector, are invited to submit their views on the objectives and elements of the NCQG</p>');
                var info = $('<p class="subinfo">Date: 15 Februay 2022 <br>Mandate: 9/CMA.3 paragraph 17</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#new_goal_submissions_22q3').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_submission">Submission</div>')
                var text = $('<p class="popup_p">Parties, constituted bodies under the Convention and the Paris Agreement, the operating entities of the Financial Mechanism, climate finance institutions, observers and observer organizations, and other stakeholders, particularly from the private sector, are invited to submit their views on the objectives and elements of the NCQG</p>');
                var info = $('<p class="subinfo">Date: 15 August 2022  <br>Mandate: 9/CMA.3 paragraph 17</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_22q1').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 22-23 March 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });


        $('#ted_22q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var event = $('<div class="popup_event">SBs56</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 13-14 June 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_22q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var event = $('<div class="popup_event">COP27/CMA4</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 13-14 June 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_23q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var event = $('<div class="popup_event">SBs58</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 13-14 June 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 13-14 June 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_24q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var event = $('<div class="popup_event">SBs60</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 13-14 June 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_24q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var event = $('<div class="popup_event">COP29/CMA6</div>')
                var text = $('<p class="popup_p">Per year four technical expert dialogues will be conducted as part of the ad hoc work programme on the NCQG. The technical expert dialogues will be organized by the co-chairs of the ad hoc work programme on the NCQG</p>');
                var info = $('<p class="subinfo">Date: 13-14 June 2022 <br>Mandate: 9/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 10</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 18</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });


        $('#ncqg_deliberation_22q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var event = $('<div class="popup_event">COP27/CMA4</div>')
                var text = $('<p class="popup_p">The deliberations of the NCQG continue at CMA4, CMA5 and CMA6. The deliberations take stock of the progress made and provide further guidance on the ad hoc work programme. The deliberations take into consideration the annual reports of the co-chairs of the ad hoc work programme, including the key findings contained therein, and the summary reports on the HLMD, including the guidance contained therein</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 12</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ncqg_deliberation_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>')
                var text = $('<p class="popup_p">The deliberations of the NCQG continue at CMA4, CMA5 and CMA6. The deliberations take stock of the progress made and provide further guidance on the ad hoc work programme. The deliberations take into consideration the annual reports of the co-chairs of the ad hoc work programme, including the key findings contained therein, and the summary reports on the HLMD, including the guidance contained therein</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 12</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ncqg_deliberation_24q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var event = $('<div class="popup_event">COP29/CMA6</div>')
                var text = $('<p class="popup_p">The deliberations of the NCQG continue at CMA4, CMA5 and CMA6. The deliberations take stock of the progress made and provide further guidance on the ad hoc work programme. The deliberations take into consideration the annual reports of the co-chairs of the ad hoc work programme, including the key findings contained therein, and the summary reports on the HLMD, including the guidance contained therein</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 12</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_annual_report_22q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP27/CMA4</div>')
                var text = $('<p class="popup_p">The co-chairs of the ad hoc work programme are requested to prepare an annual report on the work conducted, including a summary and key findings of the technical expert dialogues for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 9</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_annual_report_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>')
                var text = $('<p class="popup_p">The co-chairs of the ad hoc work programme are requested to prepare an annual report on the work conducted, including a summary and key findings of the technical expert dialogues for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 9</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ted_annual_report_24q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP29/CMA6</div>')
                var text = $('<p class="popup_p">The co-chairs of the ad hoc work programme are requested to prepare an annual report on the work conducted, including a summary and key findings of the technical expert dialogues for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 9</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#summary_report_HLMD_22q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP27/CMA4</div>')
                var text = $('<p class="popup_p">The COP President is requested to prepare a summary of the deliberation at the previous HLMD, including recommendations, for consideration of the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#summary_report_HLMD_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>')
                var text = $('<p class="popup_p">The COP President is requested to prepare a summary of the deliberation at the previous HLMD, including recommendations, for consideration of the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#summary_report_HLMD_24q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP29/CMA6</div>')
                var text = $('<p class="popup_p">The COP President is requested to prepare a summary of the deliberation at the previous HLMD, including recommendations, for consideration of the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 9/CMA.3 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: End of 2024 <br>Mandate: 9/CMA.3 paragraph 22</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)

            },
        });

        $('#95_summary_HLMD_22q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>')
                var text = $('<p class="popup_p">The COP President is requested to summarize the deliberations of the HLMD for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#95_summary_HLMD_24q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP29/CMA6</div>')
                var text = $('<p class="popup_p">The COP President is requested to summarize the deliberations of the HLMD for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 2/CP.17 paragraph 21</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('.95_compilation_synthesis_report').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a compilation and synthesis of the 9.5 biennial communications</p>');
                var info = $('<p class="subinfo">Mandate: 14/CMA.3 paragraph 16</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#95_compilation_synthesis_report_25').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a compilation and synthesis of the 9.5 biennial communications</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 7</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: By June 2024 <br>Mandate: 5/CMA.3 paragraph 8</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 18/CMA.1 paragraph 6a</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 14/CMA.3 paragraph 9 & 12/CMA.1 paragraph 8</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: December 2024 <br>Mandate: 5/CMA.3 paragraph 22-23</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: No later than 31 December 2022 <br>Mandate: 2/CP.17 paragraph 13 & 1/CP.24 paragraph 38</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('.test_electronic_reporting_tools').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deadline">Deadline</div>')
                var text = $('<p class="popup_p">The UNFCCC secretariat is requested to develop reporting tools for the electronic reporting of the CTFs and make available a test version of the reporting tools by June 2023 with a view to the final version of the tools being completed by June 2024, subject to the timely availability of sufficient financial resources</p>');
                var info = $('<p class="subinfo">Date: By June 2023<br>Mandate: 5/CMA.3 paragraph 8</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 14/CMA.3 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#95_insession_workshop_summary_report_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>')
                var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 14/CMA.3 paragraph 11</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });


        $('#95_insession_workshop_report_25q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP30/CMA7</div>');
                var text = $('<p class="popup_p">The UNFCCC secretariat is requested to prepare a summary report on the in-session workshop on the 9.5 biennial communications for consideration by the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 8</p>')
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });


        $('.3rd_95_biennial_communications').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deadline">Deadline</div>')
                var text = $('<p class="popup_p">Developed country Parties are urged to submit Biennial Communications on ex-ante climate finance information</p>');
                var info = $('<p class="subinfo">Date: No later than 31 December 2024 <br>Mandate: 12/CMA.1 paragraph 2</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('.2nd_95_biennial_communications').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deadline">Deadline</div>');
                var text = $('<p class="popup_p">Developed country Parties are urged to submit biennial communications on ex-ante climate finance information</p>');
                var info = $('<p class="subinfo">Date: No later than 31 December 2022 <br>Mandate: 14/CMA.3 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: No later than 31 December 2022 <br>Mandate: 12/CMA.1 paragraph 10</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });



        $('#95_hlmd_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var text = $('<p class="popup_p">High-level ministerial dialogues on climate finance to be informed, inter alia, by the summary reports on the 9.5 in-session workshops and the 9.5 biennial communications</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 10</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#95_hlmd_25').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var text = $('<p class="popup_p">High-level ministerial dialogues on climate finance to be informed, inter alia, by the summary reports on the 9.5 in-session workshops and the 9.5 biennial communications</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 10</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: No later than 31 December 2024<br>Mandate: 2/CP.17 paragraph 13 & 6/CP25 paragraph 3</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('.update_of_95_guidelines').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var text = $('<p class="popup_p">Consideration to update the types of information to be provided by Parties in their 9.5 biennial communications on the basis of Parties’ experience and lessons learned in the preparation of their biennial communications of indicative quantitative and qualitative information</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 13</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#update_of_95_guidelines_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>');
                var text = $('<p class="popup_p">Consideration to update the types of information to be provided by Parties in their 9.5 biennial communications on the basis of Parties’ experience and lessons learned in the preparation of their biennial communications of indicative quantitative and qualitative information</p>');
                var info = $('<p class="subinfo">Mandate: 12/CMA.1 paragraph 13</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: No later than 31 December 2024 <br>Mandate: 2/CP.17 paragraph 13 & 6/CP25 paragraph 3</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: By December 2023 <br>Mandate: 5/CMA.3 paragraph 10</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#ltf_hlmd_22q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The COP27 Presidency is invited to organize the HLMD on climate finance and the progress and fulfillment of the goal of mobilizing jointly $100 billion per year by 2020</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 21</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ltf_hlmd_24q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>');
                var event = $('<div class="popup_event">COP29/CMA6</div>');
                var text = $('<p class="popup_p">The COP Presidency is invited to organize a HLMD on climate finance</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 20</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#hlmd_summary_report_ltf_23q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP28/CMA5</div>');
                var text = $('<p class="popup_p">The COP Presidency is requested to summarize the deliberations at the dialogues for consideration by the COP</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 20</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#hlmd_summary_report_ltf_25q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP230/CMA7</div>');
                var text = $('<p class="popup_p">The COP Presidency is requested to summarize the deliberations at the dialogues for consideration by the COP</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 20</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });




        $('.first_btrs').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>')
                var text = $('<p class="popup_p">Submission of first BTRs for Parties to the CMA in accordance with the MPGs</p>');
                var info = $('<p class="subinfo">Date: At the latest by 31 December 2024<br>Mandate: 18/CMA.1 paragraph 3</p>')
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });


        $('.climate_finance_definition').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">SBs60</div>');
                var text = $('<p class="popup_p">The SCF is requested to continue its work on definitions of climate finance, taking into account the submissions received from Parties on this matter, with a view to providing input for consideration the COP and CMA</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 12 & 10/CMA.3 paragraph 3</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 5/CP.26 paragraph 23</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">11/CP.25 paragraph 17</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('.ndr').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">SBs60</div>');
                var text = $('<p class="popup_p">The SCF is requested to prepare, every four years, a report on the determination of the needs of developing country Parties related to implementing the Convention and the Paris Agreement, for consideration by the COP and CMA. This report is formally known as the report on the determination of the needs of developing country Parties related to implementing the Convention and the Paris Agreement</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.24 paragraph 13</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date: By 30 April 2022 <br>Mandate: 10/CMA.3 paragraph 2</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#ba22_q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The SCF is requested to prepare a biennial assessment and overview of climate finance flows, to take into account relevant work by other bodies and entities on the measurement, reporting and verification of support and the tracking of climate finance. This report is formally known as the Biennial Assessment and Overview of Climate Finance Flows</p>');
                var info = $('<p class="subinfo">Mandate: 1/CP.18 paragraph 71</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#ba24_q4').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">SBs60</div>');
                var text = $('<p class="popup_p">The SCF is requested to prepare a biennial assessment and overview of climate finance flows, to take into account relevant work by other bodies and entities on the measurement, reporting and verification of support and the tracking of climate finance. This report is formally known as the Biennial Assessment and Overview of Climate Finance Flows</p>');
                var info = $('<p class="subinfo">Mandate: 1/CP.18 paragraph 71</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.information_relevant_art_21c').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The SCF is requested to undertake further work on mapping the available information relevant to Article 2, paragraph 1(c), of the Paris Agreement, including its reference to Article 9 thereof, with a view to providing input for consideration of the COP</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 13</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.synthesis_relevant_art_21c').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The SCF is requested to submit a synthesis of the submissions of views on achieving Article 2.1c for consideration of the CMA</p>');
                var info = $('<p class="subinfo">Mandate: 10/CMA.3 paragraph 2</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.report_100_billion_goal').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The SCF is requested to prepare a report on progress towards achieving the goal of mobilizing jointly $100 billion per year, taking into account the Climate Finance Delivery Plan and other relevant reports, for consideration by the COP</p>');
                var info = $('<p class="subinfo">Mandate: 4/CP.26 paragraph 19</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.initiation_2nd_review').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var event = $('<div class="popup_event">COP27/CMA4</div>')
                var text = $('<p class="popup_p">The second review of the SCF will be initiated at COP27</p>');
                var info = $('<p class="subinfo">Mandate: 11/CP.25 paragraph 17</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.conclusion_2nd_review').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>')
                var event = $('<div class="popup_event">COP28/CMA5</div>')
                var text = $('<p class="popup_p">The second review of the SCF should be concluded at COP28</p>');
                var info = $('<p class="subinfo">Mandate: 11/CP.25 paragraph 17</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.submission_GEF_guidance').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_submission">Submission</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">Parties are invited to submit views and recommendations on guidance for the GEF</p>');
                var info = $('<p class="subinfo">Date: 10 weeks before COP27<br>Mandate: 7/CP.26 paragraph 19</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 6/CP.24 paragraph 2</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('.7th_replenishment_finance').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deliberation">Deliberation</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The seventh review of the Financial Mechanism is set to be completed by COP27</p>');
                var info = $('<p class="subinfo">Mandate: 11/CP.23 paragraph 4</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.pledging_conference_2nd_replen').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>')
                var text = $('<p class="popup_p">The pledging conference for the second replenishment is currently expected to take place in mid-2023</p>');
                var info = $('<p class="subinfo">Date: Expeded in mid-2023<br>Mandate: 6/CP.26 paragraph 3c</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Date:Expected to begin mid-2022<br>Mandate: 6/CP.26 paragraph 3c</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
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
                var info = $('<p class="subinfo">Mandate: 11/CP.23 paragraph 4</p>');
                return mysvgdiv.append(milestone)
                    .append(text)
                    .append(info)
            },
        });

        $('#glasgow_dialogue_ld_finance_22q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>');
                var event = $('<div class="popup_event">SBs56</div>');
                var text = $('<p class="popup_p">The Glasgow Dialogue between Parties, relevant organizations and stakeholders is established to discuss the arrangements for the funding of activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change</p>');
                var info = $('<p class="subinfo">Mandate: 1/CMA.3 paragraph 73</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#glasgow_dialogue_ld_finance_23q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>');
                var event = $('<div class="popup_event">SBs58</div>');
                var text = $('<p class="popup_p">The Glasgow Dialogue between Parties, relevant organizations and stakeholders is established to discuss the arrangements for the funding of activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change</p>');
                var info = $('<p class="subinfo">Mandate: 1/CMA.3 paragraph 73</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#glasgow_dialogue_ld_finance_24q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>');
                var event = $('<div class="popup_event">SBs60</div>');
                var text = $('<p class="popup_p">The Glasgow Dialogue between Parties, relevant organizations and stakeholders is established to discuss the arrangements for the funding of activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change</p>');
                var info = $('<p class="subinfo">Mandate: 1/CMA.3 paragraph 73</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('#glasgow_dialogue_ld_finance_25q2').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_meeting">Meeting</div>');
                var event = $('<div class="popup_event">SBs62</div>');
                var text = $('<p class="popup_p">The Glasgow Dialogue between Parties, relevant organizations and stakeholders is established to discuss the arrangements for the funding of activities to avert, minimize and address loss and damage associated with the adverse impacts of climate change</p>');
                var info = $('<p class="subinfo">Mandate: 1/CMA.3 paragraph 73</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.submission_4th_review_af').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_submission">Submission</div>');
                var event = $('<div class="popup_event">SBs56</div>');
                var text = $('<p class="popup_p">Parties to the Kyoto Protocol, Parties to the Paris Agreement and observer organizations, as well as other interested international organizations, stakeholders and nongovernmental organizations involved in the activities of the Adaptation Fund, and implementing entities accredited by the Adaptation Fund Board are invited to o submit their views on the fourth review of the Adaptation Fund for for consideration by the Subsidiary Body for Implementation at its fifty-sixth session</p>');
                var info = $('<p class="subinfo">Date: 31 March 2021<br>Mandate: 4/CMP.16 paragraph 3</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.af_review_technical_paper').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_report">Report</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The secretariat, in collaboration with the Adaptation Fund Board secretariat, is requested to prepare a technical paper on the fourth review of the Adaptation Fund, in accordance with the terms of reference, taking into account the deliberations and conclusions of the Subsidiary Body for Implementation at its fifty-sixth session and the submissions for consideration by the Subsidiary Body for Implementation at its fifty-seventh session</p>');
                var info = $('<p class="subinfo">Mandate: 4/CMP.16 paragraph 5</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.doubling_adaptation_finance').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deadline">Deadline</div>');
                var event = $('<div class="popup_event">SBs62</div>');
                var text = $('<p class="popup_p">Developed country Parties are urged to at least double their collective provision of climate finance for adaptation to developing country Parties from 2019 levels by 2025, in the context of achieving a balance between mitigation and adaptation in the provision of scaled-up financial resources</p>');
                var info = $('<p class="subinfo">Mandate: 1/CMA.3 paragraph 18</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

        $('.4th_review_af').popover({
            placement: 'right',
            trigger: 'hover',
            html: true,
            content: function () {
                var mysvgdiv = $('<div class="popup" padding:5px"></div>');
                var milestone = $('<div class="popup_deadline">Deadline</div>');
                var event = $('<div class="popup_event">COP27/CMA4</div>');
                var text = $('<p class="popup_p">The Subsidiary Body for Implementation is requested to complete its work on the fourth review of the Adaptation Fund at its fifty-seventh session, while welcoming the participation of Parties to the Paris Agreement, with a view to recommending a draft decision on the matter for consideration and adoption by the CMA and CMP</p>');
                var info = $('<p class="subinfo">Mandate: 4/CMP.16 paragraph 6</p>');
                return mysvgdiv.append(milestone)
                    .append(event)
                    .append(text)
                    .append(info)
            },
        });

    }


);