import React from 'react';
import { Card } from 'tdesign-react';

export default function BasicCard() {
  return (
    <Card title="标题" actions="操作" header bordered hoverShadow style={{ width: '400px' }}>
      仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
    </Card>
  );
}
