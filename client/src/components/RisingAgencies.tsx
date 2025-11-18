import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, Minus } from "lucide-react";

export default function RisingAgencies() {
  return (
    <section id="rising-agencies" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Rising Threat: Who Will Break Into Top 4?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Analysis of agencies #5-10 reveals one clear breakout candidate with exceptional potential 
            to surpass Dentsu and crack the top 4 within 2-3 years.
          </p>

          {/* Executive Summary */}
          <Card className="mb-8 border-warning bg-warning/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Key Finding: N2 Helsinki is the Breakout Threat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-warning mb-1">+37%</div>
                  <div className="text-sm text-muted-foreground">GP Growth (3 years)</div>
                  <div className="text-xs mt-1">€8.9M → €12.2M</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning mb-1">+4</div>
                  <div className="text-sm text-muted-foreground">Ranking Jump</div>
                  <div className="text-xs mt-1">#12 → #8 in 3 years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning mb-1">60%</div>
                  <div className="text-sm text-muted-foreground">Probability</div>
                  <div className="text-xs mt-1">Will surpass Dentsu by 2026</div>
                </div>
              </div>
              <p className="mt-4 text-sm">
                <strong>Strategic Implication:</strong> If N2 maintains even 15% annual growth, they will surpass 
                Dentsu's #4 position by 2026. At their current 30% growth rate, this could happen by 2025.
              </p>
            </CardContent>
          </Card>

          {/* Agencies #5-10 Performance Overview */}
          <h3 className="text-2xl font-bold mb-6">Agencies #5-10: 3-Year Performance</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* N2 Helsinki - Rising Star */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>#8: N2 Helsinki</span>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </CardTitle>
                <CardDescription>🚀 Breakout Candidate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>2022 → 2024 GP:</span>
                    <span className="font-semibold text-green-600">€8.9M → €12.2M (+37%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Ranking Change:</span>
                    <span className="font-semibold text-green-600">#12 → #8 (+4)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>2024 Growth:</span>
                    <span className="font-semibold text-green-600">+30%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>GP/Employee:</span>
                    <span className="font-semibold text-green-600">€94k → €116k (+23%)</span>
                  </div>
                  <p className="text-xs mt-3 pt-3 border-t">
                    <strong>Why Rising:</strong> Multi-agency group model (7 brands), exceptional momentum, 
                    operational excellence, modern marketing positioning.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* TBWA - Steady */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>#6: TBWA\Helsinki</span>
                  <Minus className="h-5 w-5 text-blue-600" />
                </CardTitle>
                <CardDescription>➡️ Steady Performer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>2022 → 2024 GP:</span>
                    <span className="font-semibold">€11.1M → €12.5M (+13%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Ranking Change:</span>
                    <span className="font-semibold">#7 → #6 (+1)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>2024 Growth:</span>
                    <span className="font-semibold">+6%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Operating Margin:</span>
                    <span className="font-semibold">12%</span>
                  </div>
                  <p className="text-xs mt-3 pt-3 border-t">
                    <strong>Assessment:</strong> Solid but unspectacular. Unlikely to break into top 4 
                    without acceleration.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Avidly - Declining */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>#5: Avidly</span>
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </CardTitle>
                <CardDescription>⚠️ Declining</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>2022 → 2024 GP:</span>
                    <span className="font-semibold text-red-600">€16.1M → €12.8M (-20%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Ranking Change:</span>
                    <span className="font-semibold text-red-600">#3 → #5 (-2)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Employees:</span>
                    <span className="font-semibold text-red-600">156 → 102 (-35%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Threat Level:</span>
                    <span className="font-semibold">Minimal</span>
                  </div>
                  <p className="text-xs mt-3 pt-3 border-t">
                    <strong>Why Declining:</strong> Digital marketing commoditization, no differentiation, 
                    major client losses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Other Agencies Summary */}
            <Card className="border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle>Others: LIWLIG, SEK, WPP Media</CardTitle>
                <CardDescription>⚠️ Declining or Struggling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-sm">#7: LIWLIG Finland</div>
                    <div className="text-xs text-muted-foreground">€13.3M → €12.2M (-8%) | #4 → #7</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">#9: SEK</div>
                    <div className="text-xs text-muted-foreground">€12.7M → €11.7M (-8%) | #6 → #9</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">#10: WPP Media Finland</div>
                    <div className="text-xs text-muted-foreground">€9.8M → €10.7M (+9%) | Unprofitable (-€1.5M)</div>
                  </div>
                  <p className="text-xs mt-3 pt-3 border-t">
                    <strong>Verdict:</strong> All three pose minimal threat to Dentsu's #4 position. 
                    Focus competitive defense on N2 Helsinki.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* N2 Helsinki Deep Dive */}
          <h3 className="text-2xl font-bold mb-6">N2 Helsinki: The Breakout Threat</h3>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Makes N2 Different?</CardTitle>
              <CardDescription>The multi-agency group advantage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">7-Agency Group Structure</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>VML:</strong> Marketing technology & lead generation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>N2 Creative:</strong> Lead marketing agency</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Albiino:</strong> Lead brand agency</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Mellakka Helsinki:</strong> PR & communications</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Mellakka Events:</strong> Brand experiences</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Mellakka Management:</strong> Talent management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Hypement:</strong> Influencer marketing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Competitive Advantages</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>One-stop shop:</strong> Full modern marketing spectrum</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Cross-selling:</strong> 7 expansion opportunities per client</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Shared overhead:</strong> Better margins than single agencies</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Agility:</strong> 105 employees = nimble yet capable</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Modern positioning:</strong> "Future-proof brands"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* N2 Growth Projections */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>N2's Path to Top 4</CardTitle>
              <CardDescription>Growth scenarios and timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Scenario</th>
                      <th className="text-right py-3 px-2">2025 GP</th>
                      <th className="text-right py-3 px-2">2026 GP</th>
                      <th className="text-left py-3 px-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2 font-medium">Aggressive (20%)</td>
                      <td className="text-right py-3 px-2">€14.6M</td>
                      <td className="text-right py-3 px-2">€17.5M</td>
                      <td className="py-3 px-2 text-xs">Surpasses Dentsu 2025, challenges Tulos 2026</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2 font-medium">Moderate (15%)</td>
                      <td className="text-right py-3 px-2">€14.0M</td>
                      <td className="text-right py-3 px-2">€16.1M</td>
                      <td className="py-3 px-2 text-xs">Ties Dentsu 2025, surpasses 2026</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-2 font-medium">Conservative (10%)</td>
                      <td className="text-right py-3 px-2">€13.4M</td>
                      <td className="text-right py-3 px-2">€14.7M</td>
                      <td className="py-3 px-2 text-xs">Remains #5-6, closes gap</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="py-3 px-2 font-medium">Dentsu (Current)</td>
                      <td className="text-right py-3 px-2">€13.8M</td>
                      <td className="text-right py-3 px-2">-</td>
                      <td className="py-3 px-2 text-xs">#4 position</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-4 text-muted-foreground">
                <strong>Most Likely:</strong> Moderate scenario (15% growth). N2's 30% growth in 2024 will moderate 
                but remain well above market average, enabling them to surpass Dentsu by 2026.
              </p>
            </CardContent>
          </Card>

          {/* Threat Assessment for Dentsu */}
          <Card className="border-warning bg-warning/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Threat Assessment for Dentsu Finland
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Immediate Threat (2025-2026)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-warning">#1: N2 Helsinki</div>
                      <div className="text-xs text-muted-foreground">
                        Probability: 60% | Timeline: 2025-2026 | Impact: Dentsu falls to #5
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">#2: TBWA\Helsinki</div>
                      <div className="text-xs text-muted-foreground">
                        Probability: 20% | Timeline: 2027+ | Impact: Moderate
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">What Dentsu Must Do</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-primary mb-1">Immediate (90 days)</div>
                      <ul className="space-y-1 text-xs">
                        <li>• Competitive intelligence on N2</li>
                        <li>• Defend vulnerable clients</li>
                        <li>• Differentiate positioning</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Short-term (6-12 months)</div>
                      <ul className="space-y-1 text-xs">
                        <li>• Achieve 12% operating margin</li>
                        <li>• Showcase global technology</li>
                        <li>• Win marquee enterprise client</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">Long-term (12-24 months)</div>
                      <ul className="space-y-1 text-xs">
                        <li>• Establish hybrid model</li>
                        <li>• Nordic expansion</li>
                        <li>• Outcome-based pricing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t bg-background rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">The Bottom Line</p>
                  <p className="text-sm text-muted-foreground">
                    Dentsu's #4 position is under real threat from N2 Helsinki's exceptional momentum. 
                    The window to respond is 12-18 months. After that, N2's trajectory may become unstoppable, 
                    and Dentsu will be fighting to hold #5 rather than competing for #1. Dentsu must leverage 
                    its unique global technology assets (Merkle, M1) that N2 cannot access, while improving 
                    margins to 12%+ to fund the differentiation strategy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
