const Analytics = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart 1 */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Chart Placeholder</p>
                    </div>
                </div>

                {/* Chart 2 */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h2>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Chart Placeholder</p>
                    </div>
                </div>

                {/* Metrics */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Conversion Rate</span>
                            <span className="text-gray-900 font-semibold">2.4%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Bounce Rate</span>
                            <span className="text-gray-900 font-semibold">32.8%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Avg. Session Duration</span>
                            <span className="text-gray-900 font-semibold">4m 32s</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Direct</span>
                            <span className="text-gray-900 font-semibold">45%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Organic Search</span>
                            <span className="text-gray-900 font-semibold">30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Social</span>
                            <span className="text-gray-900 font-semibold">15%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Referral</span>
                            <span className="text-gray-900 font-semibold">10%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics; 