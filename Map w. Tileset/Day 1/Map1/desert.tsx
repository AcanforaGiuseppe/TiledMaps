<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.2" name="desert" tilewidth="32" tileheight="32" spacing="1" margin="1" tilecount="48" columns="8">
 <image source="../../Tileset/top-down-flat/tmw_desert_spacing.png" width="265" height="199"/>
 <tile id="29">
  <properties>
   <property name="Walkable" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="30">
  <properties>
   <property name="Walkable" type="bool" value="false"/>
  </properties>
 </tile>
 <tile id="31">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32">
    <properties>
     <property name="Walkable" value=""/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <wangsets>
  <wangset name="DesertRoads" type="corner" tile="-1">
   <wangcolor name="" color="#ff0000" tile="9" probability="1"/>
   <wangcolor name="" color="#00ff00" tile="33" probability="1"/>
   <wangtile tileid="0" wangid="0,0,0,1,0,0,0,0"/>
   <wangtile tileid="1" wangid="0,0,0,1,0,1,0,0"/>
   <wangtile tileid="2" wangid="0,0,0,0,0,1,0,0"/>
   <wangtile tileid="8" wangid="0,1,0,1,0,0,0,0"/>
   <wangtile tileid="9" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="10" wangid="0,0,0,0,0,1,0,1"/>
   <wangtile tileid="16" wangid="0,1,0,0,0,0,0,0"/>
   <wangtile tileid="17" wangid="0,1,0,0,0,0,0,1"/>
   <wangtile tileid="18" wangid="0,0,0,0,0,0,0,1"/>
   <wangtile tileid="19" wangid="0,1,0,0,0,1,0,1"/>
   <wangtile tileid="20" wangid="0,1,0,1,0,0,0,1"/>
   <wangtile tileid="24" wangid="0,0,0,2,0,0,0,0"/>
   <wangtile tileid="25" wangid="0,0,0,2,0,2,0,0"/>
   <wangtile tileid="26" wangid="0,0,0,0,0,2,0,0"/>
   <wangtile tileid="27" wangid="0,0,0,1,0,1,0,1"/>
   <wangtile tileid="28" wangid="0,1,0,1,0,1,0,0"/>
   <wangtile tileid="32" wangid="0,2,0,2,0,0,0,0"/>
   <wangtile tileid="33" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="34" wangid="0,0,0,0,0,2,0,2"/>
   <wangtile tileid="35" wangid="0,2,0,0,0,2,0,2"/>
   <wangtile tileid="36" wangid="0,2,0,2,0,0,0,2"/>
   <wangtile tileid="40" wangid="0,2,0,0,0,0,0,0"/>
   <wangtile tileid="41" wangid="0,2,0,0,0,0,0,2"/>
   <wangtile tileid="42" wangid="0,0,0,0,0,0,0,2"/>
   <wangtile tileid="43" wangid="0,0,0,2,0,2,0,2"/>
   <wangtile tileid="44" wangid="0,2,0,2,0,2,0,0"/>
  </wangset>
  <wangset name="DesertRoadsType2" type="corner" tile="-1">
   <wangcolor name="" color="#ff0000" tile="9" probability="1"/>
   <wangcolor name="" color="#00ff00" tile="29" probability="1"/>
   <wangtile tileid="0" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="1" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="2" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="8" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="9" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="10" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="16" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="17" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="18" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="19" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="20" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="27" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="28" wangid="0,1,0,1,0,1,0,2"/>
   <wangtile tileid="29" wangid="0,2,0,2,0,2,0,2"/>
  </wangset>
 </wangsets>
</tileset>
