import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

// Get base path for assets
const basePath = import.meta.env.BASE_URL || "/";

export function ThreeYearTrends() {
  const rankingChanges = [
    { agency: "Tulos Helsinki", change: "#14 → #3", trend: "up", highlight: true, description: "+11 positions, 52% GP growth" },
    { agency: "Dentsu Finland", change: "#5 → #4", trend: "up", highlight: true, description: "Recovered from consolidation" },
    { agency: "N2 Helsinki", change: "#12 → #8", trend: "up", highlight: false, description: "+30% growth, improving efficiency" },
    { agency: "Avidly", change: "#3 → #5", trend: "down", highlight: false, description: "-20% revenue decline" },
    { agency: "LIWLIG Finland", change: "#4 → #7", trend: "down", highlight: false, description: "Post-event peak fading" },
    { agency: "SEK", change: "#6 → #9", trend: "down", highlight: false, description: "Losing differentiation" },
  ];

  const dentsuJourney = [
    { year: "2021", revenue: "€130.8M", employees: 144, status: "Consolidation begins", type: "neutral" },
    { year: "2022", revenue: "€104.3M (-20%)", employees: 113, status: "Contraction phase", type: "negative" },
    { year: "2023", revenue: "€82.7M (-21%)", employees: 115, status: "Bottom reached", type: "negative" },
    { year: "2024", revenue: "€104.4M (+26%)", employees: 112, status: "Recovery achieved", type: "positive" },
  ];

  return (
    <section id="3year-trends" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <Badge className="mb-4" variant="default">
            <TrendingUp className="h-3 w-3 mr-1" />
            3-Year Market Evolution
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Competitive Landscape Evolution (2022-2024)</h2>
          <p className="text-lg text-muted-foreground">
            The Finnish marketing agency market underwent significant transformation over the past three years, 
            with technology-driven disruption and consolidation reshaping the competitive hierarchy.
          </p>
        </div>

        {/* Market Trends Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2022: Post-Pandemic Adjustment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Market growth slowed to +1.8% as post-COVID momentum faded. Event agencies recovered strongly, 
                but traditional agencies faced margin pressure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2023: Disruption Begins</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Near-zero market growth. Tulos Helsinki emerged as efficiency leader with automation-first model. 
                Agencies began technology investments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2024: New Dynamics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Technology vs. traditional divide emerged. Tulos broke into top 3 with 41% margin. 
                Automation became table stakes, not differentiator.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ranking Changes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Ranking Changes (2022-2024)</CardTitle>
            <CardDescription>Winners and losers in the 3-year competitive battle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankingChanges.map((item) => (
                <div 
                  key={item.agency}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    item.highlight ? 'bg-accent/20 border-primary' : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-destructive" />
                    )}
                    <div>
                      <p className="font-semibold">{item.agency}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <Badge variant={item.trend === 'up' ? 'default' : 'destructive'} className="ml-4">
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trend Visualizations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>3-Year Gross Profit Evolution</CardTitle>
              <CardDescription>How the top agencies' performance changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={`${basePath}chart_3year_gp_evolution.png`}
                alt="3-Year Gross Profit Evolution" 
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operating Margin Trends</CardTitle>
              <CardDescription>Tulos's margin leadership widened dramatically</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={`${basePath}chart_3year_margin_trends.png`}
                alt="3-Year Margin Trends" 
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ranking Changes Visualization</CardTitle>
              <CardDescription>Movement in competitive positions</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={`${basePath}chart_3year_ranking_changes.png`}
                alt="3-Year Ranking Changes" 
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Efficiency Comparison 2024</CardTitle>
              <CardDescription>Gross profit per employee reveals stark differences</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={`${basePath}chart_efficiency_comparison_2024.png`}
                alt="Efficiency Comparison 2024" 
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>
        </div>

        {/* Dentsu's 4-Year Journey */}
        <Card className="mb-12 border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Dentsu Finland's 4-Year Journey (2021-2024)
            </CardTitle>
            <CardDescription>
              From consolidation crisis to recovery - a case study in organizational transformation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {dentsuJourney.map((year) => (
                <div 
                  key={year.year}
                  className={`p-4 rounded-lg border ${
                    year.type === 'positive' ? 'bg-green-50 border-green-200' :
                    year.type === 'negative' ? 'bg-red-50 border-red-200' :
                    'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold text-lg">{year.year}</p>
                    {year.type === 'positive' && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                    {year.type === 'negative' && <XCircle className="h-4 w-4 text-destructive" />}
                  </div>
                  <p className="text-sm font-semibold mb-1">{year.revenue}</p>
                  <p className="text-xs text-muted-foreground mb-1">{year.employees} employees</p>
                  <p className="text-xs font-medium">{year.status}</p>
                </div>
              ))}
            </div>

            <img 
              src={`${basePath}chart_dentsu_4year_deep_dive.png`}
              alt="Dentsu 4-Year Deep Dive" 
              className="w-full rounded-lg border"
            />

            <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/30">
              <p className="text-sm font-semibold mb-2">Key Insight:</p>
              <p className="text-sm text-muted-foreground">
                Dentsu successfully recovered revenue (+26% in 2024) after a 37% decline during consolidation. 
                However, operating margins (8%) remain the lowest in the top 10, indicating incomplete operational 
                integration and efficiency challenges that must be addressed to compete effectively.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Implications */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Strategic Implications from 3-Year Trends</CardTitle>
            <CardDescription>What the historical data reveals about future success factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Winning Patterns
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Technology + Efficiency</strong> (Tulos): Automation delivers exponential margins (41%)</li>
                  <li>• <strong>Premium Positioning</strong> (Miltton): Consultancy model commands sustainable premiums (13%)</li>
                  <li>• <strong>Consistent Execution</strong> (Dagmar): Steady growth beats volatility</li>
                  <li>• <strong>Agile Adaptation</strong> (N2): Quick pivots enable rapid improvement</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-destructive flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Losing Patterns
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Stuck in Middle</strong> (Dentsu, WPP): Neither premium nor efficient = margin compression</li>
                  <li>• <strong>Complacency</strong> (Avidly, SEK): Past success doesn't guarantee future relevance</li>
                  <li>• <strong>Linear Scaling</strong> (LIWLIG): Growth requiring proportional headcount hits limits</li>
                  <li>• <strong>Incomplete Transformation</strong>: Half-finished consolidation worse than no consolidation</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-background rounded-lg border">
              <p className="font-semibold mb-2">Critical Success Factors for 2025-2027:</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-primary mb-1">Margin Excellence</p>
                  <p className="text-muted-foreground">12%+ operating margin is table stakes for top 5</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-1">Efficiency Metrics</p>
                  <p className="text-muted-foreground">€200k+ GP per employee required</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-1">Clear Positioning</p>
                  <p className="text-muted-foreground">Must be either premium or efficient, not middle</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
