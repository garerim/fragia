'use client';

import React, { useState, useEffect } from 'react';
import {
  Line,
  LineChart as RechartsLineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cn } from '@/lib/utils';

interface LineChartProps {
  data: any[];
  className?: string;
  xAxisDataKey: string;
  dataKeys: {
    key: string;
    color: string;
    name?: string;
  }[];
  height?: number;
  width?: string | number;
  showGrid?: boolean;
}

export function LineChart({
  data,
  className,
  xAxisDataKey,
  dataKeys,
  height = 300,
  width = '100%',
  showGrid = true,
}: LineChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Early return a placeholder while client-side rendering isn't ready
  // or when rendering on the server
  if (!isMounted) {
    return (
      <div 
        className={cn('w-full flex items-center justify-center', className)}
        style={{ 
          height: typeof height === 'number' ? `${height}px` : height,
          width: width
        }}
      >
        <div className="text-center text-zinc-500">Loading chart...</div>
      </div>
    );
  }

  // The dynamic import ensures the component only loads on the client
  const DynamicChart = () => {
    const ChartComponent = React.lazy(() => import('./line-chart-client'));
    return (
      <React.Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-zinc-500">Loading chart...</div>
          </div>
        }
      >
        <ChartComponent 
          data={data}
          xAxisDataKey={xAxisDataKey}
          dataKeys={dataKeys}
          height={height}
          width={width}
          showGrid={showGrid}
        />
      </React.Suspense>
    );
  };

  return (
    <div 
      className={cn('w-full', className)}
      style={{ 
        height: typeof height === 'number' ? `${height}px` : height,
        width: width
      }}
    >
      <DynamicChart />
    </div>
  );
} 