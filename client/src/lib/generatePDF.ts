import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { top10Agencies, marketOverview, mustWinBattles, dentsuProjections } from '@/data/marketData';

export function generateComprehensivePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  
  let yPos = margin;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Helper function to add section title
  const addSectionTitle = (title: string, size: number = 16) => {
    checkPageBreak(15);
    doc.setFontSize(size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(41, 55, 140); // Primary color
    doc.text(title, margin, yPos);
    yPos += 10;
  };

  // Helper function to add body text
  const addBodyText = (text: string, fontSize: number = 10) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      checkPageBreak(7);
      doc.text(line, margin, yPos);
      yPos += 6;
    });
    yPos += 3;
  };

  // Cover Page
  doc.setFillColor(41, 55, 140);
  doc.rect(0, 0, pageWidth, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Finnish Marketing Agency', pageWidth / 2, 35, { align: 'center' });
  doc.text('Market Analysis', pageWidth / 2, 50, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Comprehensive Competitive Landscape & Strategic Roadmap', pageWidth / 2, 65, { align: 'center' });
  
  yPos = 100;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Executive Summary', margin, yPos);
  yPos += 10;
  
  addBodyText(
    'This comprehensive analysis examines the Finnish marketing agency market in 2024, ' +
    'focusing on competitive dynamics, financial performance, and strategic opportunities. ' +
    'The report provides detailed insights into the top 10 agencies by gross profit, with ' +
    'particular emphasis on understanding exceptional performers like Tulos Helsinki and ' +
    'developing a strategic roadmap for Dentsu Finland to achieve market-leading profitability.'
  );

  yPos += 5;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Key Findings:', margin, yPos);
  yPos += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const keyFindings = [
    `• Market contracted 2.4% in gross profit but operating profit grew 10.7%`,
    `• Operating margins vary dramatically: from 8% to 41% among top performers`,
    `• Tulos Helsinki achieved 6x industry average margin through automation`,
    `• Dentsu Finland ranks #4 in revenue but #7 in profitability`,
    `• Technology and efficiency are becoming key competitive differentiators`
  ];
  
  keyFindings.forEach(finding => {
    checkPageBreak(6);
    doc.text(finding, margin + 5, yPos);
    yPos += 6;
  });

  yPos += 10;
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Report Date: November 2025`, margin, yPos);
  yPos += 5;
  doc.text(`Data Source: Kauppalehti (November 10, 2024)`, margin, yPos);

  // Page 2: Market Overview
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('Market Overview', 18);
  
  addBodyText(
    'The Finnish marketing agency market in 2024 demonstrates a clear trend toward ' +
    'efficiency over growth. While gross profit declined by 2.4%, operating profit ' +
    'increased by 10.7%, indicating successful cost optimization across the industry.'
  );

  // Market Statistics Table
  checkPageBreak(50);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Market Statistics', margin, yPos);
  yPos += 8;

  autoTable(doc, {
    startY: yPos,
    head: [['Metric', 'Value', 'Change']],
    body: [
      ['Total Gross Profit', `€${marketOverview.totalGrossProfit}M`, `${marketOverview.gpChange}%`],
      ['Total Operating Profit', `€${marketOverview.totalOperatingProfit}M`, `+${marketOverview.opChange}%`],
      ['Average Operating Margin', `${marketOverview.avgOperatingMargin}%`, '-'],
      ['Total Employees', marketOverview.totalEmployees.toLocaleString(), `${marketOverview.employeeChange}`],
      ['Agencies with Growth', '18 of 50', '-'],
      ['Agencies with Decline', '30 of 50', '-'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [41, 55, 140], textColor: 255 },
    margin: { left: margin, right: margin },
  });

  yPos = (doc as any).lastAutoTable.finalY + 15;

  addSectionTitle('Key Market Insights', 14);
  
  addBodyText(
    'Market Contraction: Only 18 of 50 agencies grew in 2024, while 30 saw declines. ' +
    'The market is described as "slow and sticky" with clients prioritizing short-term, ' +
    'measurable results over long-term brand building.'
  );

  addBodyText(
    'Efficiency Focus: Despite revenue challenges, operating profit grew 10.7% as agencies ' +
    'reduced headcount (185 fewer employees) and optimized operations. This shift indicates ' +
    'a fundamental transformation in how agencies operate.'
  );

  addBodyText(
    'Technology Advantage: Agencies leveraging AI and automation are achieving dramatically ' +
    'better margins and productivity metrics than traditional players. This technology gap ' +
    'is becoming the primary competitive differentiator.'
  );

  // Page 3: Top 10 Agencies
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('Top 10 Agencies by Gross Profit', 18);
  
  addBodyText(
    'The top 10 agencies represent diverse business models, from traditional full-service ' +
    'agencies to specialized technology-first players. Performance varies dramatically, ' +
    'with operating margins ranging from 8% to 41%.'
  );

  checkPageBreak(100);
  autoTable(doc, {
    startY: yPos,
    head: [['Rank', 'Agency', 'Type', 'GP (€M)', 'Growth', 'Employees', 'OP Margin', 'GP/Emp']],
    body: top10Agencies.map(agency => [
      agency.rank.toString(),
      agency.name.replace('\\', ''),
      agency.type,
      `€${agency.grossProfit}M`,
      `${agency.gpChange > 0 ? '+' : ''}${agency.gpChange}%`,
      agency.employees.toString(),
      `${agency.operatingMargin}%`,
      `€${agency.gpPerEmployee}k`,
    ]),
    theme: 'grid',
    headStyles: { fillColor: [41, 55, 140], textColor: 255, fontSize: 8 },
    bodyStyles: { fontSize: 8 },
    margin: { left: margin, right: margin },
    columnStyles: {
      0: { cellWidth: 15 },
      1: { cellWidth: 35 },
      2: { cellWidth: 25 },
      3: { cellWidth: 20 },
      4: { cellWidth: 18 },
      5: { cellWidth: 20 },
      6: { cellWidth: 20 },
      7: { cellWidth: 18 },
    },
  });

  yPos = (doc as any).lastAutoTable.finalY + 15;

  // Page 4: Tulos Helsinki Analysis
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('The Tulos Helsinki Phenomenon', 18);
  
  addBodyText(
    'Tulos Helsinki represents a paradigm shift in the agency model, achieving performance ' +
    'metrics that are 4-6 times better than industry averages through technology and automation. ' +
    'Their success demonstrates that the traditional agency model can be fundamentally transformed.'
  );

  checkPageBreak(40);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Exceptional Performance Metrics', margin, yPos);
  yPos += 8;

  autoTable(doc, {
    startY: yPos,
    head: [['Metric', 'Tulos Helsinki', 'Industry Average', 'Multiple']],
    body: [
      ['Operating Margin', '41%', '7%', '6x'],
      ['GP per Employee', '€607k', '€100k', '6x'],
      ['Growth Rate', '+53%', '+3%', '18x'],
      ['Employees', '23', '118', '0.2x'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [76, 175, 80], textColor: 255 },
    margin: { left: margin, right: margin },
  });

  yPos = (doc as any).lastAutoTable.finalY + 15;

  addSectionTitle('How Tulos Achieved This', 14);
  
  addBodyText(
    '1. Automation-First Business Model: Tulos manages "dozens of websites" (per their blog) ' +
    'with only 23 employees—a ratio impossible without significant automation. They\'ve ' +
    'implemented marketing automation at scale, leveraging AI and advanced analytics to create ' +
    'systematic, repeatable processes that reduce manual labor.'
  );

  addBodyText(
    '2. Operational Leverage, Not Premium Pricing: With standard market rates ($100-149/hr ' +
    'per Clutch.co), Tulos\'s profitability comes from operational efficiency—each employee ' +
    'generates €607k in gross profit vs. the industry average of €100k. This is achieved ' +
    'through technology leverage and systematization, not by cutting corners or charging premium prices.'
  );

  addBodyText(
    '3. Exponential Scalability: Traditional agencies scale linearly (more clients = more people). ' +
    'Tulos scales exponentially: their automated systems and data-driven processes allow one ' +
    'employee to serve 6x more clients than traditional agencies. This creates a sustainable ' +
    'competitive advantage that\'s difficult to replicate.'
  );

  // Page 5: Dentsu Analysis
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('Dentsu Finland: Current Position', 18);
  
  addBodyText(
    'Dentsu Finland ranks #4 in gross profit (€13.8M) but #7 in operating margin (8%). ' +
    'The agency is well-positioned with strong revenue growth (+8%) but faces significant ' +
    'efficiency challenges compared to top performers.'
  );

  checkPageBreak(50);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(76, 175, 80);
  doc.text('Strengths', margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  
  const strengths = [
    'Global Network: Unique access to Dentsu International technology, data, and best practices',
    'Integration Opportunity: Consolidation of 5 agencies creates potential for major synergies',
    'Media Strength: Media business was main growth driver in 2024',
    'Growth Momentum: 8% growth in declining market shows competitive strength',
  ];
  
  strengths.forEach(strength => {
    const lines = doc.splitTextToSize(`• ${strength}`, contentWidth - 10);
    lines.forEach((line: string) => {
      checkPageBreak(6);
      doc.text(line, margin + 5, yPos);
      yPos += 5;
    });
  });

  yPos += 10;
  checkPageBreak(50);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(239, 83, 80);
  doc.text('Weaknesses', margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  
  const weaknesses = [
    'Low Operating Margin: 8% is significantly below leaders (Tulos 41%, TBWA 19%)',
    'Unclear Differentiation: "Full-service" positioning is generic and undifferentiated',
    'Technology Gap: Global resources not visible in market positioning',
    'Scale Challenge: Too small for scale advantages, too large for efficiency',
  ];
  
  weaknesses.forEach(weakness => {
    const lines = doc.splitTextToSize(`• ${weakness}`, contentWidth - 10);
    lines.forEach((line: string) => {
      checkPageBreak(6);
      doc.text(line, margin + 5, yPos);
      yPos += 5;
    });
  });

  // Page 6: Competitive Comparison
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('Dentsu vs. Top Performers', 18);
  
  checkPageBreak(50);
  autoTable(doc, {
    startY: yPos,
    head: [['Metric', 'Dentsu', 'Tulos', 'TBWA', 'Miltton']],
    body: [
      ['Operating Margin', '8%', '41%', '19%', '13%'],
      ['GP per Employee', '€123k', '€607k', '€119k', '€103k'],
      ['Growth Rate', '8%', '53%', '13%', '1%'],
      ['Employees', '112', '23', '105', '265'],
      ['Gross Profit', '€13.8M', '€14.0M', '€12.5M', '€27.2M'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [41, 55, 140], textColor: 255 },
    margin: { left: margin, right: margin },
  });

  yPos = (doc as any).lastAutoTable.finalY + 15;

  addBodyText(
    'The comparison reveals that Dentsu\'s challenge is not revenue generation (strong at €13.8M) ' +
    'but operational efficiency. While Dentsu has more employees than TBWA (112 vs 105), TBWA ' +
    'achieves 2.4x better operating margin (19% vs 8%). This efficiency gap represents the ' +
    'primary opportunity for improvement.'
  );

  // Page 7: Strategic Vision
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('Path to Market Leadership', 18);
  
  doc.setFillColor(41, 55, 140);
  doc.setDrawColor(41, 55, 140);
  doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, 'FD');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Strategic Vision', margin + 5, yPos + 10);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const visionText = '"Dentsu Finland: The AI-Powered Growth Partner with Global Superpowers"';
  doc.text(visionText, margin + 5, yPos + 20);
  
  yPos += 40;
  doc.setTextColor(60, 60, 60);
  
  addBodyText(
    'The only Finnish agency that combines local market expertise with global technology platforms, ' +
    'AI-powered efficiency with human creativity, and integrated capabilities with specialized excellence.'
  );

  yPos += 5;
  addSectionTitle('24-Month Financial Targets', 14);
  
  checkPageBreak(40);
  autoTable(doc, {
    startY: yPos,
    head: [['Period', 'Gross Profit', 'Operating Margin', 'Key Milestone']],
    body: [
      ['Current (2024)', `€${dentsuProjections.current.grossProfit}M`, `${dentsuProjections.current.operatingMargin}%`, 'Baseline'],
      ['Year 1 Target', `€${dentsuProjections.year1.grossProfit}M`, `${dentsuProjections.year1.operatingMargin}%`, 'Efficiency gains'],
      ['Year 2 Target', `€${dentsuProjections.year2.grossProfit}M`, `${dentsuProjections.year2.operatingMargin}%`, 'Market leader'],
    ],
    theme: 'grid',
    headStyles: { fillColor: [41, 55, 140], textColor: 255 },
    margin: { left: margin, right: margin },
  });

  yPos = (doc as any).lastAutoTable.finalY + 15;

  // Pages 8-12: Must-Win Battles
  mustWinBattles.forEach((battle, index) => {
    if (index > 0 || yPos > pageHeight - 100) {
      doc.addPage();
      yPos = margin;
    }
    
    doc.setFillColor(41, 55, 140);
    doc.circle(margin + 5, yPos + 3, 5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(battle.id.toString(), margin + 5, yPos + 5, { align: 'center' });
    
    doc.setTextColor(41, 55, 140);
    doc.setFontSize(14);
    doc.text(battle.title, margin + 15, yPos + 5);
    yPos += 12;
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    const goalLines = doc.splitTextToSize(`Goal: ${battle.goal}`, contentWidth);
    goalLines.forEach((line: string) => {
      doc.text(line, margin, yPos);
      yPos += 5;
    });
    yPos += 3;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`Impact: ${battle.impact}`, margin, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(60, 60, 60);
    doc.text('Key Initiatives:', margin, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    battle.initiatives.forEach(initiative => {
      const lines = doc.splitTextToSize(`→ ${initiative}`, contentWidth - 10);
      lines.forEach((line: string) => {
        checkPageBreak(6);
        doc.text(line, margin + 5, yPos);
        yPos += 5;
      });
    });
    
    yPos += 10;
  });

  // Final Page: Research Methodology
  doc.addPage();
  yPos = margin;
  
  addSectionTitle('Research Methodology', 18);
  
  addBodyText(
    'This analysis combines quantitative financial data with qualitative market research to ' +
    'provide a comprehensive view of the Finnish marketing agency landscape.'
  );

  addSectionTitle('Primary Data Sources', 12);
  
  addBodyText(
    'Financial Performance Data: Kauppalehti "Miljoonaluokan käänne mainostoimistoissa" ' +
    '(November 10, 2024) by Aleksi Ylä-Anttila and Erkka Felt. Comprehensive financial ' +
    'analysis of the top 50 Finnish marketing agencies.'
  );

  addBodyText(
    'Business Model Information: Agency profiles on Clutch.co, company websites, and publicly ' +
    'available case studies. For Tulos Helsinki: Clutch.co profile showing pricing ($10k+ projects, ' +
    '$100-149/hr rates) and their blog reference to managing "dozens of websites."'
  );

  addSectionTitle('Analytical Approach', 12);
  
  addBodyText(
    'The analysis of Tulos Helsinki\'s business model combines direct evidence (financial metrics, ' +
    'pricing data) with analytical inference. The conclusion that they use an automation-first ' +
    'model is based on mathematical analysis: managing dozens of clients with 23 employees while ' +
    'generating €607k GP per employee is only possible through significant automation.'
  );

  addSectionTitle('Limitations', 12);
  
  addBodyText(
    'Financial Data: Based on publicly filed financial statements. Some agencies may have ' +
    'accounting adjustments that affect year-over-year comparability.'
  );

  addBodyText(
    'Business Model Analysis: Specific operational details are not publicly disclosed. Analysis ' +
    'of automation approaches is based on mathematical inference from efficiency ratios, not ' +
    'direct operational observation.'
  );

  addBodyText(
    'Strategic Recommendations: Based on current competitive landscape and assume successful ' +
    'execution. Actual results will depend on implementation quality, market conditions, and ' +
    'competitive responses.'
  );

  // Footer on last page
  yPos = pageHeight - 20;
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Finnish Marketing Agency Market Analysis | November 2025', pageWidth / 2, yPos, { align: 'center' });

  // Save the PDF
  doc.save('Finnish_Marketing_Agency_Analysis.pdf');
}
