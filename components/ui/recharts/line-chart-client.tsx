'use client';

import React from 'react';
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

interface LineChartClientProps {
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

export default function LineChartClient({
  data,
  className,
  xAxisDataKey,
  dataKeys,
  height = 300,
  width = '100%',
  showGrid = true,
}: LineChartClientProps) {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsLineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <Tooltip />
          {dataKeys.map((dataKey) => (
            <Line
              key={dataKey.key}
              type="monotone"
              dataKey={dataKey.key}
              stroke={dataKey.color}
              name={dataKey.name || dataKey.key}
              strokeWidth={2}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
} 