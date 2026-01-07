import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Twitter, 
  Key,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Code,
  Zap,
  Shield
} from "lucide-react";

export default function TwitterSetup() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Twitter className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Twitter Integration Setup</h1>
            <p className="text-slate-600 mt-1">
              Configure live Twitter feed monitoring and notifications
            </p>
          </div>
        </div>

        {/* Status Banner */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-orange-900 mb-1">Setup Required</h3>
                  <p className="text-sm text-orange-800">
                    Your Twitter API credentials have been securely stored. To complete the integration, 
                    you need to enable backend functions.
                  </p>
                </div>
                <Badge className="bg-orange-200 text-orange-900">
                  Backend Functions Required
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 1: API Credentials */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Step 1: Twitter API Credentials
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-900">
                ✓ API credentials securely stored
              </span>
            </div>
            
            <div className="text-sm text-slate-700 space-y-2">
              <p className="font-medium">Your credentials are stored as:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                <li><code className="bg-slate-100 px-2 py-0.5 rounded">TWITTER_API_KEY</code></li>
                <li><code className="bg-slate-100 px-2 py-0.5 rounded">TWITTER_API_SECRET</code></li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">
                These secrets are encrypted and never exposed in frontend code.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Enable Backend Functions */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Step 2: Enable Backend Functions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-slate-700 space-y-3">
              <p className="font-medium">To enable live Twitter integration:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to your app <strong>Dashboard → Settings</strong></li>
                <li>Navigate to the <strong>Backend Functions</strong> section</li>
                <li>Click <strong>"Enable Backend Functions"</strong></li>
                <li>Come back here and click "Create Twitter Function" below</li>
              </ol>
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-4"
              disabled
            >
              <Zap className="w-4 h-4 mr-2" />
              Create Twitter Monitoring Function (Enable Backend First)
            </Button>
          </CardContent>
        </Card>

        {/* Step 3: What Gets Created */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-500" />
              Step 3: What Gets Created
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-slate-700 space-y-3">
              <p className="font-medium">Once backend functions are enabled, we'll create:</p>
              
              <div className="space-y-3 mt-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-1">1. Twitter Monitor Function</h4>
                  <p className="text-sm text-blue-800">
                    Runs every 5 minutes to fetch tweets from @GeorgiaHouseofReps and @Georgia_Senate
                  </p>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-1">2. Bill Mention Detector</h4>
                  <p className="text-sm text-purple-800">
                    Uses AI to identify bill numbers (HB, SB, HR, SR) mentioned in tweets
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-1">3. Notification Sender</h4>
                  <p className="text-sm text-green-800">
                    Sends SMS/push notifications to users tracking mentioned bills
                  </p>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-1">4. Tweet Storage</h4>
                  <p className="text-sm text-orange-800">
                    Automatically saves tweets to your database for display in the feed
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-slate-500" />
              Technical Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-semibold mb-2">Twitter API Endpoints Used:</h4>
                <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                  <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded">GET /2/tweets/search/recent</code> - Search for tweets</li>
                  <li><code className="text-xs bg-slate-100 px-1 py-0.5 rounded">GET /2/users/by/username/:username</code> - Get user info</li>
                  <li>Rate limit: 450 requests per 15 minutes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Monitored Accounts:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">@GeorgiaHouseofReps</Badge>
                  <Badge variant="outline">@Georgia_Senate</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Search Patterns:</h4>
                <p className="text-slate-600 mb-2">We search for tweets containing:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                  <li>House Bills: HB 1, HB 23, etc.</li>
                  <li>Senate Bills: SB 1, SB 45, etc.</li>
                  <li>House Resolutions: HR 1, HR 12, etc.</li>
                  <li>Senate Resolutions: SR 1, SR 34, etc.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SMS/Push Notifications */}
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Phone Notifications Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-slate-700 space-y-3">
              <p>
                For SMS notifications, you'll need to configure a messaging service like:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-600">
                <li><strong>Twilio</strong> - Most popular SMS service</li>
                <li><strong>AWS SNS</strong> - Amazon's notification service</li>
                <li><strong>SendGrid</strong> - Email + SMS capabilities</li>
              </ul>
              
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mt-4">
                <p className="text-sm text-blue-900 font-medium mb-1">
                  📱 We'll set this up together
                </p>
                <p className="text-xs text-blue-800">
                  Once backend functions are enabled, I can help you configure SMS delivery with your preferred service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Card */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-2">Need Help?</p>
                <p className="mb-3">
                  Once you enable backend functions in your app settings, come back and I'll help you:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Create the Twitter monitoring function</li>
                  <li>Set up automated tweet fetching</li>
                  <li>Configure SMS/push notification delivery</li>
                  <li>Test the complete notification flow</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}