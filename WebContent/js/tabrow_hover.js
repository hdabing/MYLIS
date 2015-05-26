/**
 * ���Ĺ��Ч��
 * @param tab_id (��ѡ����)����id��Ĭ��idΪtab_data
 * @param hover_color (��ѡ����)�����������ʱ����Ҫ���õ��б���ɫ��Ĭ��ֵ��#F2FAFA
 * @param out_color (��ѡ����)������Ƴ���ʱ����Ҫ���õ��б���ɫ��Ĭ��ֵ����ǰ�еĳ�ʼ����ɫ��
 * 
 * ��ע�⣺�����ڵ�һ��Ϊ����ı��
 */
function tabrow_hover(tab_id, hover_color, out_color) {
	if (tab_id == null) {
		tab_id = "tab_data";
	}
	if (hover_color == null) {
		//hover_color = "#F2FAFA";
		hover_color = "#FFFFE1";
	}
	var tab = document.getElementById(tab_id);
	if (tab != null) {
		for ( var i = 1; i < tab.rows.length; i+=1) {
			// ��û�д���out_color����������ø��еĵ�ǰ�ı���ɫ
			if (out_color==null) {
				tab.rows[i]._$bg = tab.rows[i].style.backgroundColor;
			} 
			tab.rows[i].onmouseover = function() {
				this.style.backgroundColor = hover_color;
			}
			tab.rows[i].onmouseout = function() {
				this.style.backgroundColor = (this._$bg==null) ? out_color : this._$bg;
			}
		}
	}
}