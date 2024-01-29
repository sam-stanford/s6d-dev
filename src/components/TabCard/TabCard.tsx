import { Card } from "antd";
import { ReactNode, useState } from "react";

export type TabCardDataItem = {
  tab: string;
  key: string;
  content: ReactNode;
};

export type TabCardProps = {
  data: TabCardDataItem[];
  marginBottom?: string;
};

export default function TabCard(props: TabCardProps) {
  const [selectedKey, setSelectedKey] = useState(props.data[0].key);

  const contentMap: Map<string, ReactNode> = new Map(
    props.data.map((item) => [item.key, item.content])
  );

  const onTabChange = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <Card
      style={{
        width: "100%",
        marginTop: "1em",
        marginBottom: props.marginBottom ? props.marginBottom : "1em",
      }}
      tabProps={{ size: "large" }}
      tabList={props.data}
      activeTabKey={selectedKey}
      onTabChange={(key: string) => {
        onTabChange(key);
      }}
    >
      {contentMap.get(selectedKey)}
    </Card>
  );
}
