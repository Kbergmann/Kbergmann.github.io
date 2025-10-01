// section_research.js
// Research section content and functionality for Bergmann Lab website

const RESEARCH_SECTION = {
content: `
    <!-- Overview -->
    <div class="research-overview">
      <p class="section-description">
        In our group, we reconstruct ancient climates to understand how environmental change shaped the evolutionary history of macroscopic life. We focus on pivotal transitions—from the first animals to the expansion of seed plants—using carbonate rocks as archives of past climate and carbon cycle change. Our approach integrates fieldwork, petrography, and isotope geochemistry, especially clumped isotope thermometry, to distinguish original depositional signals from later alteration.
      </p>
    </div>

    <!-- Methods & Clumped Isotopes -->
    <div class="research-theme">
      <div class="theme-content">
        <h3 class="theme-title">Methods &amp; Clumped Isotopes</h3>
        <div class="theme-layout">
          <div class="theme-text">
            <p class="theme-description">
              <strong>Challenge:</strong> Traditional oxygen isotope measurements (δ<sup>18</sup>O) cannot distinguish between changes in temperature and changes in seawater composition. Additionally, diagenetic alteration and differences between laboratories make it difficult to extract primary climate signals from ancient rocks. Our work addresses these challenges by developing and refining carbonate clumped-isotope thermometry (Δ<sub>47</sub>–Δ<sub>48</sub>), which allows us to independently measure both temperature and seawater δ<sup>18</sup>O. We integrate careful field observations and petrographic analysis with phase-targeted sampling and standardized analytical protocols to reconstruct temperature records from small samples across different carbonate types and fabrics.
            </p>
            <div class="related-publications">
              <h4>Recent Publications:</h4>
            <ul>
            <li><b>Anderson, N.T.</b>, Bonifacie, M., <b>Jost, A.B.</b>, Siebert, J., Bontognali, T., Horita, J., Müller, I.A., Bernasconi, S.M., <b>Bergmann, K.D.</b>, 2024, Re-assessing the need for apatite- and dolomite-specific calibrations of the carbonate clumped isotope thermometer, <em>Geochemistry, Geophysics, Geosystems</em>, 25(1). <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023GC011049">link</a>.</li>
            <li><b>Anderson, N.T.</b>, Kelson, J.R., Kele, S., Daëron, M., Bonifacie, M., <b>Mackey, T.J.</b>, John, C.M., Kluge, T., <b>Jost, A.B.</b>, Huntington, K.W., Bernasconi, S.M., <b>Bergmann, K.D.</b>, 2021, A unified clumped isotope thermometer calibration (0.5–1100°C) using carbonate-based standardization, <em>Geophysical Research Letters</em>, e2020GL092069. <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020GL092069">link</a>.</li>
            <li>Bernasconi, S.M., Daëron, M., <b>Bergmann, K.D.</b>, Bonifacie, M., Meckler, A.N., <em>et&nbsp;al.</em>, 2021, InterCarb: interlaboratory standardization of the carbonate clumped isotope thermometer, <em>Geochemistry, Geophysics, Geosystems</em>, 22(5), e2020GC009588. <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020GC009588">link</a>.</li>
            </ul>
            </div>
          </div>
          <div class="theme-image">
            <img src="assets/research/research_images/Clumped.png" loading="lazy" alt="Clumped isotope schematic">
          </div>
        </div>
      </div>
    </div>

    <!-- Snowball Earth (separate section) -->
    <div class="research-theme">
      <div class="theme-content">
        <h3 class="theme-title">Snowball Earth: Tonian &amp; Cryogenian</h3>
        <div class="theme-layout">
          <div class="theme-text">
            <p class="theme-description">
              <strong>Challenge:</strong> The Cryogenian period witnessed some of Earth's most extreme glaciations, but understanding the climate conditions before, during, and after these "Snowball Earth" events has proven difficult. Intense diagenesis and deformation often obscure primary climate signals in these ancient rocks. We are developing new approaches, including isotope conglomerate tests and integrated geochemical analyses, to better constrain temperatures and environmental conditions during this critical interval that preceded the evolution of complex animal life.
            </p>
            <div class="related-publications">
              <h4>Recent Publications:</h4>
            <ul>
              <li>Macdonald, F.A., Renger, E., Tasistro-Hart, A., <em>et&nbsp;al.</em>, incl. <strong>Bergmann, K.D.</strong> (2025) Mantle-like Sr in a Sturtian cap carbonate (Oman). <em>Geology</em>.</li>
              <li><strong>Mackey, T.J.</strong>, <strong>Jost, A.B.</strong>, Creveling, J.R., <strong>Bergmann, K.D.</strong> (2020) Low clumped-isotope temperatures in Cryogenian strata. <em>AGU Adv.</em>.</li>
            </ul>
            </div>
          </div>
          <div class="theme-image">
            <img src="assets/research/research_images/Snowball.png" loading="lazy" alt="Snowball Earth deposits">
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Ediacaran / Shuram -->
    <div class="research-theme">
      <div class="theme-content">
        <h3 class="theme-title">Ediacaran: Shuram Excursion &amp; Early Animals</h3>
        <div class="theme-layout">
          <div class="theme-text">
            <p class="theme-description">
              <strong>Challenge:</strong> The Ediacaran Period records both the largest known carbon isotope excursion in Earth history (the Shuram excursion) and the first appearance of complex animal life. Understanding what drove this massive carbon cycle perturbation, how long it lasted, and whether it influenced early animal evolution requires careful integration of chronology, petrology, and geochemistry. Our work combines new Re–Os age constraints, detailed analysis of carbonate fabrics from the microscale to nanoscale, and multi-isotope systematics to demonstrate that the Shuram represents a relatively short-lived global carbon cycle disturbance beginning near 573 Ma. We suggest the onset coincides with hothouse conditions, followed by environmental stabilization that coincides with deep-water animal diversification.
            </p>
            <div class="related-publications">
              <h4>Recent Publications:</h4>
            <ul>
              <li><b>Wilcots, J.</b>[&#8225;], <b>Bergmann, K.D.</b>[&#8225;], Gilbert, P., Cross, A., 2025, Nanoscale crystal fabric preserved in dolomite ooids at the onset of the Ediacaran Shuram excursion, <em>The Sedimentary Record</em>.</li>
              <li><b>Bergmann, K.D.</b>, Osburn, M.R., <b>Anderson, N.T.</b>, <b>Hayhow, C.</b>, <b>Wilcots, J.</b>, <b>Cantine, M.D.</b>, Fischer, W.W., Bonifaci, M., 2025, Origins and alteration of Ediacaran carbonates recording the Shuram excursion in Oman, <em>Geochemistry, Geophysics, Geosystems</em>, 26, e2025GC012161. <a href="https://agupubs-onlinelibrary-wiley-com.libproxy.mit.edu/doi/10.1029/2025GC012161">link</a>.</li>
              <li><b>Cantine, M.D.</b>, Rooney, A.D., Knoll, A., Gómez-Pérez, I., Al Baloushi, B., <b>Bergmann, K.D.</b>, 2024, Chronology of Ediacaran sedimentary and biogeochemical shifts along eastern Gondwanan margins, <em>Nature Communications Earth & Environment</em>, 5, 520. <a href="https://www.nature.com/articles/s43247-024-01630-1#citeas">link</a>.</li>
              <li>Gómez-Pérez, I.[&#8225;], <b>Bergmann, K.D.</b>[&#8225;], Al Rawahi, H., 2024, Integrated platform-to-basin correlation in the Ediacaran of Oman, <em>AAPG Bulletin</em>, 108(9). <a href="https://pubs.geoscienceworld.org/aapg/aapgbull/article/108/9/1727/646620/An-integrated-correlation-from-platform-to-basin">link</a>.</li>
            </ul>
            </div>
          </div>
          <div class="theme-image">
            <img src="assets/research/research_images/Ediacaran_deep.png" loading="lazy" alt="Ediacaran environments">
          </div>
        </div>
      </div>
    </div>

    <!-- Cambrian (separate section) -->
    <div class="research-theme">
      <div class="theme-content">
        <h3 class="theme-title">Cambrian Climate</h3>
        <div class="theme-layout">
          <div class="theme-text">
            <p class="theme-description">
              <strong>Challenge:</strong> Cambrian marine carbonates yield anomalously low δ<sup>18</sup>O values that, if interpreted as primary signals, would imply implausibly high ocean temperatures. This presents a major obstacle to reconstructing climate during the Cambrian explosion of animal diversity. Our research explores systematic differences in isotopic composition between carbonate preserved in fossil apatite (shells and conodonts) and associated bulk carbonates across varied burial and diagenetic histories. We also investigate how the earliest biomineralization affected carbonate preservation and climate archives, combining geochemical approaches with studies of Cambrian macrofossils to better understand both the mechanisms of early animal skeletonization and the environmental context of this pivotal evolutionary transition.
            </p>
            <div class="related-publications">
              <h4>Recent Publications:</h4>
            <ul>
                <li>Etemad-Saeed, N., Xiao, S., Wang, S.C., <b>Bergmann, K.D.</b>, Knoll, A.H., 2025, Carbonaceous macrofossils from the Ediacaran–Cambrian lower shale member of the Soltanieh Formation, NW Iran, <em>Precambrian Research</em>, 419, 107722. <a href="https://www.sciencedirect.com/science/article/pii/S0301926825000488">link</a>.</li>
                <li>Etemad-Saeed, N., Anderson, R.P., Tosca, N.J., <b>Bergmann, K.D.</b>, Knoll, A.H., 2024, Terreneuvian tubular macrofossils in the Soltanieh Formation, <em>Palaeogeography, Palaeoclimatology, Palaeoecology</em>. <a href="https://www-sciencedirect-com.libproxy.mit.edu/science/article/abs/pii/S0031018224000737">link</a>.</li>
                <li>Gilbert, P.U.P.A., <strong>Bergmann, K.D.</strong>, <em>et&nbsp;al.</em>, 2022, Biomineralization: mechanism &amp; evolutionary history. <em>Science Advances</em>, 8(10). <a href="https://www.science.org/doi/pdf/10.1126/sciadv.abl9653">link</a>.</li>
                <li><b>Bergmann, K.D.</b>, Finnegan, S., <b>Creel, R.</b>, Eiler, J.M., Hughes, N.C., Popov, L.E., Fischer, W.W., 2018, Paired apatite–calcite clumped-isotope approach for Cambro-Ordovician seawater, <em>GCA</em>, 224, 18–41. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0016703717307287?via%3Dihub">link</a>.</li>
              </ul>
            </div>
          </div>
          <div class="theme-image">
            <img src="assets/research/research_images/Ediacaran.png" loading="lazy" alt="Cambrian archive sampling">
          </div>
        </div>
      </div>
    </div>

    <!-- Ordovician -->
    <div class="research-theme">
      <div class="theme-content">
        <h3 class="theme-title">Ordovician: Cooling, Glaciation &amp; Biodiversification</h3>
        <div class="theme-layout">
          <div class="theme-text">
            <p class="theme-description">
              <strong>Challenge:</strong> The Ordovician witnessed dramatic changes in both climate and life, including long-term cooling, the assembly of a major ice sheet, and the Great Ordovician Biodiversification Event. However, interpreting early Paleozoic δ<sup>18</sup>O records is challenging because they reflect both temperature changes and evolving seawater composition, making it difficult to quantify the magnitude and timing of climate change and its relationship to biological diversification. We address this by combining high-resolution conodont apatite records with clumped-isotope thermometry to independently constrain temperature and seawater composition. Our results document approximately 15°C of tropical ocean cooling over ~40 million years, followed by a brief but intense Hirnantian glaciation with ice volumes approaching those of the Last Glacial Maximum. This detailed climate framework allows us to explore potential links between physical environmental change and one of the most important biodiversification events in Earth history.
            </p>
            <div class="related-publications">
              <h4>Recent Publications:</h4>
              <ul>
                <li>Zimmt, J.B.[&#8225;], <b>Bergmann, K.D.</b>[&#8225;], Finnegan, S., Present, T.M., <b>Jost, A.B.</b>, Desrochers, A., 2025, Isotopic constraints on the peak of the early Paleozoic Icehouse, <em>GSA Bulletin</em>. <a href="https://pubs.geoscienceworld.org/gsa/gsabulletin/article/doi/10.1130/B37897.1/659180/Isotopic-constraints-on-the-peak-of-the-Early">link</a>.</li>
                <li><b>Bergmann, K.D.</b>[&#8225;], Macdonald, F.A.[&#8225;], Swanson-Hysell, N.L.[&#8225;], 2025, The causes and consequences of Ordovician cooling, <em>Annual Review of Earth and Planetary Sciences</em>. <a href="https://www.annualreviews.org/content/journals/10.1146/annurev-earth-040523-114630">link</a>.</li>
                <li><b>Goldberg, S.</b>, Present, T., Finnegan, S., <b>Bergmann, K.D.</b>, 2021, A high-resolution record of early Paleozoic climate, <em>PNAS</em>, 118(6). <a href="https://www.pnas.org/doi/10.1073/pnas.2013083118">link</a>.</li>
              </ul>
            </div>
          </div>
          <div class="theme-image">
            <img src="assets/research/research_images/jelly_bright.png" loading="lazy" alt="Ordovician oceans">
          </div>
        </div>
      </div>
    </div>

    <!-- Mississippian -->
    <div class="research-theme">
      <div class="theme-content">
        <h3 class="theme-title">Mississippian: Terrestrial Feedbacks &amp; Cooling</h3>
        <div class="theme-layout">
          <div class="theme-text">
            <p class="theme-description">
              <strong>Challenge:</strong> The Early Mississippian saw the expansion of forests and deep-rooting vascular plants across the continents, coinciding with major changes in the carbon cycle and climate. A key question is whether this expanding terrestrial biosphere actively drove climate change through enhanced weathering and carbon burial, or simply responded to climate shifts driven by other mechanisms. We investigate this question by constructing high-resolution records across the KOBE carbon isotope excursion, integrating δ<sup>13</sup>C stratigraphy with clumped-isotope temperature reconstructions and seawater δ<sup>18</sup>O estimates. Our results show that the carbon cycle excursion preceded significant cooling by approximately 1 million years and that ice volumes remained modest during this interval—providing evidence that terrestrial biosphere expansion may have driven subsequent climate change rather than merely responding to it.
            </p>
            <div class="related-publications">
              <h4>Recent Publications:</h4>
              <ul>
                <li><b>Anderson, N.T.</b>, <b>Bergmann, K.D.</b>, Braun, M.G., Griffith, E.M., Saltzman, M.R., 2025, High-resolution record of global cooling during a large Mississippian positive carbon isotope excursion, <em>Earth and Planetary Science Letters</em>. <a href="https://www.sciencedirect.com/science/article/pii/S0012821X25003553">link</a>.</li>
                <li>Braun, M., <b>Anderson, N.T.</b>, <b>Bergmann, K.D.</b>, Griffith, E.M., Saltzman, M.R., 2024, Early Mississippian global δ<sup>13</sup>C excursion is not a diagenetic artifact, <em>Geology</em>. <a href="https://pubs.geoscienceworld.org/gsa/geology/article-abstract/doi/10.1130/G52109.1/644363/Early-Mississippian-global-13C-excursion-is-not-a">link</a>.</li>
              </ul>
            </div>
          </div>
          <div class="theme-image">
            <img src="assets/research/research_images/mississippian.png" loading="lazy" alt="Mississippian landscapes">
          </div>
        </div>
      </div>
    </div>

  `,

  styles: `
    /* Research-specific styles */
    .research-overview {
      margin-bottom: 3rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 12px;
      border-left: 4px solid #4a90e2;
    }

    .research-theme {
      margin-bottom: 4rem;
      padding: 2.5rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .theme-content {
      max-width: 100%;
    }

    .theme-title {
      margin: 0 0 1.5rem;
      font-size: 1.5rem;
      font-weight: 400;
      color: #4a90e2;
      letter-spacing: 0.2px;
    }

    .theme-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2.5rem;
      align-items: start;
    }

    .theme-text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .theme-description {
      color: var(--muted);
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.6;
      margin: 0;
    }

    .theme-image {
      position: relative;
    }

    .theme-image img {
      width: 100%;
      height: auto;
      background-color: #000000;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease;
    }

    .theme-image img:hover {
      transform: scale(1.02);
    }

    .related-publications {
      background: rgba(0, 0, 0, 0.2);
      padding: 1.5rem;
      border-radius: 8px;
      border-left: 3px solid #4a90e2;
    }

    .related-publications h4 {
      margin: 0 0 1rem;
      font-size: 0.95rem;
      font-weight: 400;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .related-publications ul {
      margin: 0;
      padding-left: 1.2rem;
      list-style-type: disc;
    }

    .related-publications li {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      line-height: 1.4;
      color: #d9d9d9;
    }

    .related-publications li:last-child {
      margin-bottom: 0;
    }

    /* Responsive design */
    @media (max-width: 1024px) {
      .theme-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .theme-image {
        order: -1;
      }
    }

    @media (max-width: 768px) {
      .research-theme {
        padding: 1.5rem;
        margin-bottom: 2.5rem;
      }
      
      .research-overview {
        padding: 1.5rem;
      }
      
      .theme-layout {
        gap: 1.5rem;
      }
      
      .related-publications {
        padding: 1rem;
      }
    }
  `,

  // Function to inject the research section into a page
  inject: function(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) {
      console.error(`Target element ${targetSelector} not found`);
      return;
    }

    // Inject the content
    target.innerHTML = this.content;

    // Inject the styles
    const styleElement = document.createElement('style');
    styleElement.textContent = this.styles;
    document.head.appendChild(styleElement);

    console.log('Research section injected successfully');
  },

  // Function to get just the content HTML
  getContent: function() {
    return this.content;
  },

  // Function to get just the styles CSS
  getStyles: function() {
    return this.styles;
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RESEARCH_SECTION;
}

// Make available globally
window.RESEARCH_SECTION = RESEARCH_SECTION;