import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  OperatingMarginChart, 
  GrossProfitChart, 
  EfficiencyChart,
  DentsuProjectionChart,
  AgencyTypeDistribution 
} from "@/components/Charts";
import { 
  marketOverview, 
  top10Agencies, 
  mustWinBattles,
  dentsuProjections 
} from "@/data/marketData";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target,
  Lightbulb,
  Zap,
  Award,
  ArrowRight,
  BarChart3,
  LineChart,
  PieChart,
  Download
} from "lucide-react";
import { generateComprehensivePDF } from "@/lib/generatePDF";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Finnish Agency Analysis</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('overview')} className="text-sm hover:text-primary transition-colors">
                Market Overview
              </button>
              <button onClick={() => scrollToSection('competitive')} className="text-sm hover:text-primary transition-colors">
                Competitive Landscape
              </button>
              <button onClick={() => scrollToSection('dentsu')} className="text-sm hover:text-primary transition-colors">
                Dentsu Analysis
              </button>
              <button onClick={() => scrollToSection('strategy')} className="text-sm hover:text-primary transition-colors">
                Strategy
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              <LineChart className="h-3 w-3 mr-1" />
              Market Analysis 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Finnish Marketing Agency Market Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Comprehensive competitive landscape analysis and strategic roadmap for Dentsu Finland to achieve market-leading profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('overview')}>
                Explore Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('strategy')}>
                View Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Market GP</CardDescription>
                <CardTitle className="text-3xl">€{marketOverview.totalGrossProfit}M</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-destructive">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {Math.abs(marketOverview.gpChange)}% decline
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Operating Profit</CardDescription>
                <CardTitle className="text-3xl">€{marketOverview.totalOperatingProfit}M</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {marketOverview.opChange}% growth
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Avg. OP Margin</CardDescription>
                <CardTitle className="text-3xl">{marketOverview.avgOperatingMargin}%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Industry benchmark
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Employees</CardDescription>
                <CardTitle className="text-3xl">{marketOverview.totalEmployees.toLocaleString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-destructive">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {Math.abs(marketOverview.employeeChange)} reduction
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="overview" className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-4">Market Overview</h2>
            <p className="text-lg text-muted-foreground">
              The Finnish marketing agency market in 2024 shows a clear trend toward efficiency over growth. 
              While gross profit declined by 2.4%, operating profit increased by 10.7%, indicating successful 
              cost optimization across the industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Operating Margin by Agency</CardTitle>
                <CardDescription>Profitability varies dramatically across top 10 agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <OperatingMarginChart />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gross Profit Rankings</CardTitle>
                <CardDescription>Top 10 agencies by revenue (€M)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <GrossProfitChart />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/30">
            <CardHeader>
              <CardTitle>Key Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <TrendingDown className="h-5 w-5 mr-2 text-destructive" />
                    Market Contraction
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Only 18 of 50 agencies grew in 2024, while 30 saw declines. The market is described as 
                    "slow and sticky" with clients prioritizing short-term, measurable results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Efficiency Focus
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Despite revenue challenges, operating profit grew 10.7% as agencies reduced headcount 
                    (185 fewer employees) and optimized operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Technology Advantage
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Agencies leveraging AI and automation are achieving dramatically better margins and 
                    productivity metrics than traditional players.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Client Behavior
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Companies continue advertising even in downturns, but demand quick solutions with 
                    measurable value. Risk aversion is high.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section id="competitive" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-4">Competitive Landscape</h2>
            <p className="text-lg text-muted-foreground">
              The top 10 agencies represent diverse business models, from traditional full-service agencies 
              to specialized technology-first players. Performance varies dramatically.
            </p>
          </div>

          {/* Top 10 Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Top 10 Agencies by Gross Profit</CardTitle>
              <CardDescription>Comprehensive performance metrics for market leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Rank</th>
                      <th className="text-left py-3 px-2">Agency</th>
                      <th className="text-left py-3 px-2">Type</th>
                      <th className="text-right py-3 px-2">GP (€M)</th>
                      <th className="text-right py-3 px-2">Growth</th>
                      <th className="text-right py-3 px-2">Employees</th>
                      <th className="text-right py-3 px-2">OP Margin</th>
                      <th className="text-right py-3 px-2">GP/Employee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {top10Agencies.map((agency) => (
                      <tr 
                        key={agency.rank} 
                        className={`border-b hover:bg-accent/50 transition-colors ${
                          agency.name === 'Dentsu Finland' ? 'bg-warning/10' : 
                          agency.name === 'Tulos Helsinki' ? 'bg-green-50' : ''
                        }`}
                      >
                        <td className="py-3 px-2 font-medium">{agency.rank}</td>
                        <td className="py-3 px-2 font-medium">{agency.name.replace('\\', '')}</td>
                        <td className="py-3 px-2">
                          <Badge variant="outline" className="text-xs">{agency.type}</Badge>
                        </td>
                        <td className="text-right py-3 px-2">€{agency.grossProfit}M</td>
                        <td className="text-right py-3 px-2">
                          <span className={agency.gpChange > 0 ? 'text-green-600' : 'text-destructive'}>
                            {agency.gpChange > 0 ? '+' : ''}{agency.gpChange}%
                          </span>
                        </td>
                        <td className="text-right py-3 px-2">{agency.employees}</td>
                        <td className="text-right py-3 px-2 font-semibold">
                          {agency.operatingMargin}%
                        </td>
                        <td className="text-right py-3 px-2">€{agency.gpPerEmployee}k</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Efficiency Analysis */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Efficiency: GP per Employee</CardTitle>
                <CardDescription>Tulos Helsinki is a dramatic outlier at €607k per employee</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <EfficiencyChart />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Agency Type Distribution</CardTitle>
                <CardDescription>Advertising agencies dominate the top 10</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <AgencyTypeDistribution />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tulos Helsinki Analysis */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="default">
              <Award className="h-3 w-3 mr-1" />
              Outlier Performance
            </Badge>
            <h2 className="text-4xl font-bold mb-4">The Tulos Helsinki Phenomenon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tulos Helsinki represents a paradigm shift in the agency model, achieving performance metrics 
              that are 4-6 times better than industry averages through technology and automation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardDescription>Operating Margin</CardDescription>
                  <CardTitle className="text-4xl text-green-700">41%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700">6x industry average</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardDescription>GP per Employee</CardDescription>
                  <CardTitle className="text-4xl text-green-700">€607k</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700">5x industry average</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardDescription>Growth Rate</CardDescription>
                  <CardTitle className="text-4xl text-green-700">+53%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700">In a declining market</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>How Tulos Achieved This</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Automation-First Business Model</h4>
                      <p className="text-sm text-muted-foreground">
                        Tulos manages "dozens of websites" (per their blog) with only 23 employees—a ratio 
                        impossible without significant automation. They've implemented marketing automation 
                        at scale, leveraging AI and advanced analytics to create systematic, repeatable processes 
                        that reduce manual labor.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Operational Leverage, Not Premium Pricing</h4>
                      <p className="text-sm text-muted-foreground">
                        With standard market rates ($100-149/hr per Clutch.co), Tulos's profitability comes 
                        from operational efficiency—each employee generates €607k in gross profit vs. the 
                        industry average of €100k. This is achieved through technology leverage and systematization, 
                        not by cutting corners or charging premium prices.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Exponential Scalability</h4>
                      <p className="text-sm text-muted-foreground">
                        Traditional agencies scale linearly (more clients = more people). Tulos scales 
                        exponentially: their automated systems and data-driven processes allow one employee 
                        to serve 6x more clients than traditional agencies. This creates a sustainable 
                        competitive advantage that's difficult to replicate.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dentsu Analysis */}
      <section id="dentsu" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Dentsu Finland: Current Position</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dentsu Finland ranks #4 in gross profit but #7 in operating margin. The agency is well-positioned 
              but faces significant efficiency challenges compared to top performers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-warning/10 border-warning/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Strengths
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Global Network:</strong> Unique access to Dentsu International technology, data, and best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Integration Opportunity:</strong> Consolidation of 5 agencies creates potential for major synergies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Media Strength:</strong> Media business was main growth driver in 2024</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Growth Momentum:</strong> 8% growth in declining market shows competitive strength</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-destructive/10 border-destructive/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Weaknesses
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Low Operating Margin:</strong> 8% is significantly below leaders (Tulos 41%, TBWA 19%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Unclear Differentiation:</strong> "Full-service" positioning is generic and undifferentiated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Technology Gap:</strong> Global resources not visible in market positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Scale Challenge:</strong> Too small for scale advantages, too large for efficiency</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Dentsu vs. Top Performers</CardTitle>
                <CardDescription>Key metrics comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Metric</th>
                        <th className="text-right py-3 px-2">Dentsu</th>
                        <th className="text-right py-3 px-2">Tulos</th>
                        <th className="text-right py-3 px-2">TBWA</th>
                        <th className="text-right py-3 px-2">Miltton</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-2 font-medium">Operating Margin</td>
                        <td className="text-right py-3 px-2">8%</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">41%</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">19%</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">13%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2 font-medium">GP per Employee</td>
                        <td className="text-right py-3 px-2">€123k</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">€607k</td>
                        <td className="text-right py-3 px-2 text-green-600">€119k</td>
                        <td className="text-right py-3 px-2">€103k</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2 font-medium">Growth Rate</td>
                        <td className="text-right py-3 px-2">8%</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">53%</td>
                        <td className="text-right py-3 px-2 text-green-600 font-semibold">13%</td>
                        <td className="text-right py-3 px-2">1%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium">Employees</td>
                        <td className="text-right py-3 px-2">112</td>
                        <td className="text-right py-3 px-2">23</td>
                        <td className="text-right py-3 px-2">105</td>
                        <td className="text-right py-3 px-2">265</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="default">
              <Target className="h-3 w-3 mr-1" />
              Strategic Roadmap
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Path to Market Leadership</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A ready-to-execute 24-month plan for Dentsu Finland to achieve 20% operating margin and 
              become the most profitable agency in the Finnish market.
            </p>

            {/* Vision */}
            <Card className="mb-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  <strong>"Dentsu Finland: The AI-Powered Growth Partner with Global Superpowers"</strong>
                </p>
                <p className="text-muted-foreground">
                  The only Finnish agency that combines local market expertise with global technology platforms, 
                  AI-powered efficiency with human creativity, and integrated capabilities with specialized excellence.
                </p>
              </CardContent>
            </Card>

            {/* Financial Projections */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>24-Month Financial Projections</CardTitle>
                <CardDescription>Path to 20% operating margin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] mb-6">
                  <DentsuProjectionChart />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="text-sm text-muted-foreground mb-1">Current (2024)</div>
                    <div className="text-2xl font-bold mb-2">€{dentsuProjections.current.grossProfit}M</div>
                    <div className="text-sm">
                      <span className="font-semibold">{dentsuProjections.current.operatingMargin}%</span> margin
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent">
                    <div className="text-sm text-muted-foreground mb-1">Year 1 Target</div>
                    <div className="text-2xl font-bold mb-2">€{dentsuProjections.year1.grossProfit}M</div>
                    <div className="text-sm">
                      <span className="font-semibold">{dentsuProjections.year1.operatingMargin}%</span> margin
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Year 2 Target</div>
                    <div className="text-2xl font-bold mb-2">€{dentsuProjections.year2.grossProfit}M</div>
                    <div className="text-sm">
                      <span className="font-semibold text-primary">{dentsuProjections.year2.operatingMargin}%</span> margin
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Must-Win Battles */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-6">The Five Must-Win Battles</h3>
              <div className="space-y-6">
                {mustWinBattles.map((battle, index) => (
                  <Card key={battle.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                              {battle.id}
                            </div>
                            <CardTitle className="text-xl">{battle.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{battle.goal}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {battle.impact}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {battle.initiatives.map((initiative, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{initiative}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">The Transformation Imperative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Dentsu Finland cannot maintain the status quo. The efficiency gap is too large, and the market 
                  is moving too fast. This strategy leverages Dentsu's unique strengths—its global network and 
                  technology resources—to address weaknesses and emerge as the most profitable agency in Finland.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <Target className="mr-2 h-4 w-4" />
                    Begin Transformation
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" onClick={generateComprehensivePDF}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <PieChart className="h-3 w-3 mr-1" />
              Research Methodology
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Data Sources & Analytical Framework</h2>
            <p className="text-lg text-muted-foreground mb-8">
              This analysis combines quantitative financial data with qualitative market research to provide 
              a comprehensive view of the Finnish marketing agency landscape. Understanding our methodology 
              is essential for interpreting the findings and recommendations.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Primary Data Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Financial Performance Data</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Source:</strong> Kauppalehti "Miljoonaluokan käänne mainostoimistoissa" 
                        (November 10, 2024) by Aleksi Ylä-Anttila and Erkka Felt
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive financial analysis of the top 50 Finnish marketing agencies, including 
                        gross profit, operating profit, employee counts, and year-over-year changes. This forms 
                        the quantitative foundation of our analysis.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Market Context & Trends</h4>
                      <p className="text-sm text-muted-foreground">
                        Industry publications, agency websites, LinkedIn profiles, and market commentary from 
                        agency executives quoted in the Kauppalehti article. These sources provide qualitative 
                        context for the financial metrics.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Business Model Information</h4>
                      <p className="text-sm text-muted-foreground">
                        Agency profiles on Clutch.co, company websites, and publicly available case studies. 
                        For Tulos Helsinki specifically: Clutch.co profile showing pricing ($10k+ projects, 
                        $100-149/hr rates) and their blog reference to managing "dozens of websites."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Analytical Approach: Tulos Helsinki Case Study
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The analysis of Tulos Helsinki's business model combines direct evidence with analytical 
                    inference. Here's how we arrived at our conclusions:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Direct Evidence (Quantitative)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 41% operating margin (Kauppalehti)</li>
                        <li>• €607k gross profit per employee (Kauppalehti)</li>
                        <li>• 23 employees generating €14M gross profit (Kauppalehti)</li>
                        <li>• 53% growth in declining market (Kauppalehti)</li>
                        <li>• $10k+ minimum project size (Clutch.co)</li>
                        <li>• Standard hourly rates $100-149/hr (Clutch.co)</li>
                        <li>• Managing "dozens of websites" (Tulos blog)</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-2">Analytical Inference (Qualitative)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Hypothesis:</strong> Exceptional efficiency ratios indicate automation-first business model
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Logic:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Traditional agencies: 1 employee serves 1-2 clients (€100k GP/employee)</li>
                        <li>• Tulos Helsinki: 1 employee serves 6+ clients (€607k GP/employee)</li>
                        <li>• Managing "dozens" of clients with 23 people = 2-3 clients per person minimum</li>
                        <li>• This is only possible through significant automation and systematization</li>
                        <li>• Standard pricing rules out premium pricing as the profitability driver</li>
                        <li>• Therefore: Profitability comes from operational leverage, not pricing power</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-warning pl-4">
                      <h4 className="font-semibold mb-2">What We Don't Know</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Exact number of clients (estimated from "dozens" reference)</li>
                        <li>• Specific automation tools and platforms used</li>
                        <li>• Client retention rates and churn</li>
                        <li>• Whether pricing includes performance-based components</li>
                        <li>• Detailed breakdown of service delivery processes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Limitations & Caveats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Financial Data:</strong> Based on publicly filed financial statements. Some agencies 
                      may have accounting adjustments (as noted with Dentsu's integration costs) that affect 
                      year-over-year comparability.
                    </p>
                    <p>
                      <strong>Business Model Analysis:</strong> Specific operational details about how agencies 
                      deliver services are not publicly disclosed. Our analysis of Tulos Helsinki's automation 
                      approach is based on mathematical inference from efficiency ratios, not direct operational 
                      observation.
                    </p>
                    <p>
                      <strong>Market Context:</strong> The analysis reflects the Finnish market in 2024. Market 
                      dynamics, client preferences, and competitive positioning may evolve.
                    </p>
                    <p>
                      <strong>Strategic Recommendations:</strong> The Dentsu Finland strategy is based on the 
                      current competitive landscape and assumes successful execution. Actual results will depend 
                      on implementation quality, market conditions, and competitive responses.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Confidence Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Badge variant="default" className="mt-1">High</Badge>
                      <div>
                        <p className="font-semibold mb-1">Financial metrics, market size, agency rankings</p>
                        <p className="text-muted-foreground">Based on audited financial statements and official reports</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1">Medium</Badge>
                      <div>
                        <p className="font-semibold mb-1">Business model characteristics, competitive positioning</p>
                        <p className="text-muted-foreground">Based on combination of public data and analytical inference</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">Lower</Badge>
                      <div>
                        <p className="font-semibold mb-1">Specific operational processes, exact client counts</p>
                        <p className="text-muted-foreground">Based on limited public information and estimation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Finnish Agency Analysis</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive market analysis and strategic planning for the Finnish marketing agency landscape
            </p>
            <p className="text-xs text-muted-foreground">
              Data source: Kauppalehti 2024 | Analysis date: November 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
