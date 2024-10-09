function Decorator(e, t, a, r, n, i) {
	// console.log(e);
	// console.log(t);
	// console.log(a);
	// console.log(r);
	// console.log(n);
	// console.log(i);
	function o() {
		for (var e = 0; e < Be.numAreas; ++e) {
			var t = "Area" + Be.areas.split(",")[e];
			Oe.areas[t] = new Object, "Tile" == ve(t) ? (Oe.areas[t].colour = null, Oe.areas[t].decorateAreaTop = L(t), Oe.areas[t].decorateAreaBorder = null, Oe.areas[t].decorateAreaBottom = null, Oe.areas[t].decorateAreaZones = new Array) : Oe.areas[t].colour = null
		}
	}
	function l(e, t, a) {
		function r(e, t, a) {
			if (Ze) return null;
			ye();
			var r = re(t, a, !1);
			if (null == r) return null;
			if ("Tile" != ve(r)) return null;
			var n = fe(r, t, a);
			t = n.x, a = n.y;
			var i = c(r, t, a),
				o = h(i, t, a);
			return -1 != o ? [i.singleTiles[o].sku, null] : "TileRange" != i.sku ? [i.sku, null] : [i.sku, i.skus]
		}
		var n = t,
			i = a,
			o = r(e, t, a);
		return null == o ? (Re.showRoomStyleTilePopup(null), !1) : (Re.showRoomStyleTilePopup(o[0], o[1], n, i), !0)
	}
	function s(e, t, a) {
		if (Ze) return !1;
		ye();
		var r = !0;
		"None" != outlines.getMode() && "WaitingToAddZone" != outlines.getMode() && (r = !1);
		var n = re(t, a, r);
		if (vout(n), pt = n, !e) if ("WaitingToEditZone" == outlines.getMode()) {
			if (null == n) return T(e, 99999, 99999);
			if ("Tile" != ve(n)) return T(e, 99999, 99999)
		} else if ("WaitingToEditBorder" == outlines.getMode()) {
			if (null == n) return S(e, 99999, 99999);
			if ("Tile" != ve(n)) return S(e, 99999, 99999)
		} else if ("WaitingToDragSingleTile" == outlines.getMode()) {
			if (null == n) return O(e, 99999, 99999);
			if ("Tile" != ve(n)) return O(e, 99999, 99999)
		}
		if ("EditingZone" == outlines.getMode() && !e) return T(e, 88888, 88888);
		if ("EditingBorder" == outlines.getMode() && !e) return S(e, 88888, 88888);
		if ("DraggingSingleTile" == outlines.getMode() && !e) return O(e, 99999, 99999);
		if (null == n) return !1;
		if ("Tile" != ve(n)) return p(e);
		Le && outlines.clear(), ht = me(n);
		var i = fe(n, t, a);
		t = i.x, a = i.y, ("DraggingSingleTile" == outlines.getMode() || "WaitingToDragSingleTile" == outlines.getMode()) && Nt && (a -= outlines.getSingleTileGrabHandleYOffset());
		var o = c(n, t, a);
		if (gt = o, "TileZone" == gt.areaType && (ft = u(pt, t, a)), "WaitingToAddZone" == outlines.getMode()) return v(e, t, a);
		if ("WaitingToEditZone" == outlines.getMode()) return T(e, t, a);
		if ("EditingZone" == outlines.getMode()) return k(e, t, a);
		if ("WaitingToDragSingleTile" == outlines.getMode()) return O(e, t, a);
		if ("DraggingSingleTile" == outlines.getMode()) return M(e, t, a);
		if ("WaitingToEditBorder" == outlines.getMode()) return S(e, t, a);
		if ("EditingBorder" == outlines.getMode()) return x(e, t, a);
		var o = c(n, t, a);
		return mt = h(o, t, a), -1 != mt ? D(e, t, a) : "TileZone" != gt.areaType || null != gt.sku && (Le || qe || He) ? "BorderTile" == gt.areaType ? w(e, t, a) : qe ? N(e, t, a) : He ? j(e, t, a) : "WallColour" == Ue ? g(e) : "Grout" == Ue ? V(e, t, a) : "Tile" != Ue && "WallColour" != Ue ? (e || ("CabinetColour" == Ue ? Te("That surface cannot take a cabinet colour.", 1500) : Te("That surface cannot take a worktop colour.", 1500)), !1) : null == Ye ? e ? !1 : (Te("First select a tile", 1500), xe.broadcastMessage("CannotTileWithoutTileSelected"), !1) : Le ? I(e, t, a) : Ye.isBorder ? y(e, t, a) : m(e, t, a) : b(e, t, a)
	}
	function c(e, t, a) {
		for (var r = 0; r < Oe.areas[e].decorateAreaZones.length; ++r) {
			var n = Oe.areas[e].decorateAreaZones[r];
			if (t >= n.areaX && a >= n.areaY && t < n.areaX + n.areaW && a < n.areaY + n.areaH) return n
		}
		var i = Oe.areas[e].decorateAreaTop,
			o = Oe.areas[e].decorateAreaBorder,
			l = Oe.areas[e].decorateAreaBottom;
		return null != o && a >= o.areaY && a < o.areaY + o.areaH ? o : null != l && a >= l.areaY && a < l.areaY + l.areaH ? l : i
	}
	function u(e, t, a) {
		for (var r = 0; r < Oe.areas[e].decorateAreaZones.length; ++r) {
			var n = Oe.areas[e].decorateAreaZones[r];
			if (t >= n.areaX && a >= n.areaY && t < n.areaX + n.areaW && a < n.areaY + n.areaH) return r
		}
		return -1
	}
	function d(e, t, a) {
		var r = h(e, t, a);
		return -1 == r ? null : e.singleTiles[r]
	}
	function h(e, t, a) {
		function r(e, t, a) {
			if ("Diamond" == a.pattern) {
				var r = e - (a.areaX + a.areaW / 2),
					n = t - (a.areaY + a.areaH / 2);
				return r + n < -a.areaW / 2 ? !1 : r + n > a.areaW / 2 ? !1 : r - n > a.areaW / 2 ? !1 : n - r > a.areaW / 2 ? !1 : !0
			}
			return e >= a.areaX && e < a.areaX + a.areaW && t >= a.areaY && t < a.areaY + a.areaH ? !0 : !1
		}
		for (var n = 0; n < e.singleTiles.length; ++n) {
			var i = e.singleTiles[n];
			if (r(t, a, i)) return n
		}
		return -1
	}
	function p(e) {
		return "Tile" == Ue ? (e || Te("That surface cannot be tiled.", 1500), !1) : "Grout" == Ue ? (e || Te("That surface cannot be take grout.", 1500), !1) : "WallColour" == Ue && "Wall" != ve(pt) ? (e || Te("That surface cannot be painted.", 1500), !1) : "CabinetColour" == Ue && "Cabinet" != ve(pt) ? (e || Te("That surface cannot take a cabinet colour.", 1500), !1) : "WorktopColour" == Ue && "Worktop" != ve(pt) ? (e || Te("That surface cannot take a worktop colour.", 1500), !1) : e ? !0 : (et.push(VUtils.clone(Oe)), tt = new Array, "WallColour" == Ue ? Oe.areas[pt].colour = Ge : "CabinetColour" == Ue && (Oe.areas[pt].colour = Ee), "WorktopColour" == Ue && (Oe.areas[pt].colour = We), z(pt), !0)
	}
	function g(e) {
		if ("Floor" == ie(pt)) return e || (Te("That surface cannot be painted.", 1500), xe.broadcastMessage("SurfaceCannotBePainted")), !1;
		if (e) return !0;
		et.push(VUtils.clone(Oe)), tt = new Array, "WallColour" == Ue ? Oe.areas[pt].colour = Ge : "CabinetColour" == Ue && (Oe.areas[pt].colour = Ee), "WorktopColour" == Ue && (Oe.areas[pt].colour = We), Oe.areas[pt].decorateAreaTop = L(pt), Oe.areas[pt].decorateAreaBorder = null, Oe.areas[pt].decorateAreaBottom = null, z(pt);
		for (var t in Oe.areas) {
			var a = t;
			if (a != pt) {
				var r = be(a);
				r.mirrorLinkAreaName == pt && (Oe.areas[a].colour = Ge, Oe.areas[a].decorateAreaTop = L(a), Oe.areas[a].decorateAreaBorder = null, Oe.areas[a].decorateAreaBottom = null, z(a))
			}
		}
		return !0
	}
	function f(e, t, a) {
		if (e) return !0;
		var r = !0;
		if ("Floor" == ie(pt) ? r = !1 : null == gt.sku ? r = !1 : null != Oe.areas[pt].decorateAreaBorder && (r = !1), !r) return m(e, t, a);
		vt = t, bt = a;
		var n = ["decorate-mosaic-fill", "decorate-mosaic-border"];
		return Re.showDecorateOptionActions(n), !0
	}
	function m(e, t, a) {
		if ("BorderTile" == gt.areaType) return e || Te("That tile cannot be laid as a border.", 1500), !1;
		if ("Indoor" == ne(pt) && "Outdoor" == Ye.canGoWhere) return e || Te("That tile cannot be laid indoors.", 1500), !1;
		if ("Outdoor" == ne(pt) && "Indoor" == Ye.canGoWhere) return e || Te("That tile cannot be laid outdoors.", 1500), !1;
		if ("Floor" == ie(pt) && "Wall" == Ye.canGo) return e || (Te("That tile cannot be laid onto a floor.", 1500), xe.broadcastMessage("TileCannotGoOnFloor")), !1;
		if ("Wall" == ie(pt) && "Floor" == Ye.canGo) return e || (Te("That tile cannot be laid onto a wall.", 1500), xe.broadcastMessage("TileCannotGoOnWall")), !1;
		if (e) return !0;
		et.push(VUtils.clone(Oe)), tt = new Array, U(pt, gt), z(pt);
		for (var r in Oe.areas) {
			var n = r;
			if (n != pt) {
				var i = be(n);
				if (i.mirrorLinkAreaName == pt) {
					var o = Oe.areas[n].decorateAreaTop;
					U(n, o), z(n)
				}
			}
		}
		return !0
	}
	function v(e, t, a) {
		if (e) return !0;
		outlines.setMode("None"), Te(null), et.push(VUtils.clone(Oe)), tt = new Array;
		var r = L(pt);
		return r.areaType = "TileZone", r.areaX = t - 300, r.areaY = a - 300, r.areaW = 600, r.areaH = 600, r.alignX = r.areaX, r.alignY = r.areaY, Oe.areas[pt].decorateAreaZones.push(r), z(pt), lt = ht, st = pt, ct = gt, ft = Oe.areas[pt].decorateAreaZones.length - 1, ut = ft, Se.doEditZone(!0), Qe = !0, !0
	}
	function b(e, t, a) {
		if (e) return !0;
		lt = ht, st = pt, ct = gt, ut = ft;
		var r = ["decorate-delete-zone", "decorate-edit-zone"];
		switch (Ue) {
		case "Grout":
			null != ct.sku && r.push("decorate-grout-zone");
			break;
		case "Tile":
			null != Ye && (Le ? (r.push("decorate-tile-zone"), r.push("decorate-tile-zone-text")) : qe || He || Ye.isBorder || (null == ct.sku ? (null != Ve ? r.push("decorate-tiles-zone") : r.push("decorate-tile-zone"), r.push("decorate-tile-zone-text")) : (Ye.sku != ct.sku || null != Ve) && (null != Ve ? r.push("decorate-tiles-zone") : r.push("decorate-tile-zone"), r.push("decorate-tile-zone-text"))))
		}
		return Re.showDecorateOptionActions(r), !1
	}
	function T(e, t, a) {
		function r() {
			et.push(VUtils.clone(Oe)), tt = new Array;
			for (var e = Oe.areas[st].decorateAreaZones[ut], t = 0; t < e.singleTiles.length; ++t) e.singleTiles[t].areaX += Rt - e.areaX, e.singleTiles[t].areaY += At - e.areaY, e.singleTiles[t].alignX = e.singleTiles[t].areaX, e.singleTiles[t].alignY = e.singleTiles[t].areaY;
			e.areaX = Rt, e.areaY = At, e.alignX = e.areaX, e.alignY = e.areaY, e.areaW = Ct, e.areaH = Pt, F(ct), z(st), outlines.setMode("None")
		}
		if (88888 == t && 88888 == a) return e ? !1 : (r(), Se.doEditZone(!0), !0);
		if (99999 == t && 99999 == a) return e ? !1 : (r(), Ke && (Je = !0), !0);
		var n = Oe.areas[st].decorateAreaZones[ut];
		if (ht != lt) return outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), e || outlines.setMode("None"), !1;
		var i = "None";
		return outlines.isGrabDistance2(lt, t, a, Rt + 1.5 * Ct / 2, At + Pt / 2) ? i = "Finish" : outlines.isGrabDistance2(lt, t, a, Rt + Ct / 2, At + Pt / 2) ? i = "Centre" : outlines.isGrabDistance(lt, t, a, Rt, At) ? i = "Top-Left" : outlines.isGrabDistance(lt, t, a, Rt + Ct / 2, At) ? i = "Top" : outlines.isGrabDistance(lt, t, a, Rt + Ct, At) ? i = "Top-Right" : outlines.isGrabDistance(lt, t, a, Rt + Ct, At + Pt / 2) ? i = "Middle-Right" : outlines.isGrabDistance(lt, t, a, Rt + Ct, At + Pt) ? i = "Bottom-Right" : outlines.isGrabDistance(lt, t, a, Rt + Ct / 2, At + Pt) ? i = "Bottom" : outlines.isGrabDistance(lt, t, a, Rt, At + Pt) ? i = "Bottom-Left" : outlines.isGrabDistance(lt, t, a, Rt, At + Pt / 2) ? i = "Middle-Left" : outlines.isGrabHLineDistance(lt, t, a, Rt, Rt + Ct, At) ? i = "Top" : outlines.isGrabHLineDistance(lt, t, a, Rt, Rt + Ct, At + Pt) ? i = "Bottom" : outlines.isGrabVLineDistance(lt, t, a, Rt, At, At + Pt) ? i = "Middle-Left" : outlines.isGrabVLineDistance(lt, t, a, Rt + Ct, At, At + Pt) && (i = "Middle-Right"), "Finish" == i ? (outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, i), e ? !0 : (r(), Ke && (Je = !0), !0)) : "None" == i ? (outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), !1) : (Tt = t, kt = a, yt = Rt, $t = At, St = Ct, xt = Pt, outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, i), "Middle" == i ? !1 : "Finish" == i ? !1 : (wt = i, e || outlines.setMode("EditingZone"), !0))
	}
	function k(e, t, a) {
		if (ht != lt) return e || Se.doEditZone(!1), !1;
		var r = St,
			n = xt,
			i = 100;
		return -1 != wt.indexOf("Centre") ? (t = yt + t - Tt, a = $t + a - kt) : (-1 != wt.indexOf("Top") ? xt + (kt - a) >= i ? (n = xt + (kt - a), a = $t + a - kt) : (n = i, a = $t + xt - n) : -1 != wt.indexOf("Bottom") ? xt + a - kt >= i ? (n = xt + a - kt, a = $t) : (a = $t, n = i) : a = $t, -1 != wt.indexOf("Left") ? St + (Tt - t) >= i ? (r = St + (Tt - t), t = yt + t - Tt) : (r = i, t = yt + St - r) : -1 != wt.indexOf("Right") ? St + t - Tt >= i ? (r = St + t - Tt, t = yt) : (t = yt, r = i) : t = yt), Rt = t, At = a, Ct = r, Pt = n, outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !0, !1, ""), e ? !0 : (outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), outlines.setMode("WaitingToEditZone"), !0)
	}
	function w(e, t, a) {
		if (e) return !0;
		if (qe) return P(), !0;
		lt = ht, st = pt, ct = gt, dt = mt;
		var r = ["decorate-delete-border", "decorate-edit-border"];
		return ("Tile" == Ue || "Grout" == Ue) && ("Grout" == Ue ? r.push("decorate-grout-border") : null != Ye && (!Ye.isBorder && "Mosaic" != Ye.type || ct.sku == Ye.sku || r.push("decorate-change-border"))), Re.showDecorateOptionActions(r), !1
	}
	function y(e, t, a) {
		if ("Floor" == ie(pt)) return e || Te("Cannot place borders on the floor", 1500), !1;
		if (null == gt.sku) return e || Te("Place tiles before borders", 1500), !1;
		if (null != Oe.areas[pt].decorateAreaBorder) return e || Te("There is already a border on this surface", 1500), !1;
		if (e) return !0;
		et.push(VUtils.clone(Oe)), tt = new Array;
		var r = a,
			n = Ye.height;
		"Mosaic" == Ye.type && Ye.smallMosaicsH > 1 && (n = Ye.height / Ye.smallMosaicsH * 3), r + n > gt.areaH && (r = gt.areaH - n - 5);
		var i = Oe.areas[pt].decorateAreaTop;
		i.areaH = r, i.alignY = r;
		var o = L(pt);
		o.areaType = "BorderTile", o.areaY = r, o.alignY = r, o.areaH = n, o.sku = Ye.sku, o.grout = i.grout, Oe.areas[pt].decorateAreaBorder = o;
		var l = L(pt);
		return l.areaType = "BottomTiles", l.areaY = r + n, l.alignY = r + n, l.areaH -= r + n, H(l, i), Oe.areas[pt].decorateAreaBottom = l, Y(i, l), G(i), G(l), F(i), F(l), z(pt), !0
	}
	function S(e, t, a) {
		function r() {
			et.push(VUtils.clone(Oe)), tt = new Array, C(Ht, Xt), z(st), outlines.setMode("None")
		}
		if (88888 == t && 88888 == a) return e ? !1 : (r(), Se.doEditBorder(!0), !0);
		if (99999 == t && 99999 == a) return e ? !1 : (r(), !0);
		if (ht != lt) return outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), e || outlines.setMode("None"), !1;
		var n = outlines.getBorderGrabHandles(),
			i = "None";
		return outlines.isGrabDistance2(lt, t, a, n[3].x, n[3].y) ? i = "Finish" : outlines.isGrabDistance(lt, t, a, n[0].x, n[0].y) ? i = "Top" : outlines.isGrabDistance2(lt, t, a, n[1].x, n[1].y) ? i = "Centre" : outlines.isGrabDistance(lt, t, a, n[2].x, n[2].y) ? i = "Bottom" : outlines.isGrabHLineDistance(lt, t, a, 0, 99999, Ht) ? i = "Top" : outlines.isGrabHLineDistance(lt, t, a, 0, 99999, Ht + Xt) && (i = "Bottom"), "Finish" == i ? (outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, i), e ? !0 : (r(), !0)) : "None" == i ? (outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), !1) : (Tt = t, kt = a, Lt = Ht, qt = Xt, outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, i), wt = i, e || outlines.setMode("EditingBorder"), !0)
	}
	function x(e, t, a) {
		if (ht != lt) return e || Se.doEditBorder(!1), !1;
		var r = qt;
		if ("Centre" == wt) a = Lt + a - kt, a + r > Oe.areas[pt].decorateAreaBottom.areaY + Oe.areas[pt].decorateAreaBottom.areaH && (a = Oe.areas[pt].decorateAreaBottom.areaY + Oe.areas[pt].decorateAreaBottom.areaH - r - 5);
		else {
			var n = le(ct.sku),
				i = n.height;
			if ("Mosaic" == n.type && (i = n.height / n.smallMosaicsH), 90 == ct.rotation && (i = n.width, "Mosaic" == n.type && (i = n.width / n.smallMosaicsW)), "Top" == wt) {
				r = qt + (kt - a), a = Lt + a - kt;
				var o = Math.floor((r + i / 2) / i) * i;
				i > o && (o = i), a -= o - r, r = o
			} else r = qt + a - kt, a = Lt, r = Math.floor((r + i / 2) / i) * i, i > r && (r = i)
		}
		return Ht = a, Xt = r, outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !0, !1, ""), e ? !0 : (outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), outlines.setMode("WaitingToEditBorder"), !0)
	}
	function R() {
		return et.push(VUtils.clone(Oe)), tt = new Array, gt.grout = Fe, z(pt), !0
	}
	function A() {
		var e = q(pt),
			t = Oe.areas[pt].decorateAreaTop,
			a = Oe.areas[pt].decorateAreaBorder,
			r = Oe.areas[pt].decorateAreaBottom,
			n = a.areaY,
			i = n,
			o = Ye.height;
		if (ct.areaH > le(ct.sku).height) for (; o < ct.areaH - Ye.height;) o += Ye.height;
		var l = o - a.areaH;
		i + o > r.areaY + r.areaH && (i = r.areaY + r.areaH - o - 5), t.areaH = i, t.alignY = i, a.areaY = i, a.alignY = i, a.areaH = o, a.sku = Ye.sku, r.areaY = i + o, r.alignY = i + o, r.areaH = e.areaH - (i + o), B(r, l), F(r), z(pt)
	}
	function C(e, t) {
		var a = q(st),
			r = Oe.areas[st].decorateAreaTop,
			n = Oe.areas[st].decorateAreaBorder,
			i = Oe.areas[st].decorateAreaBottom,
			o = e - n.areaY,
			l = e + t - (n.areaY + n.areaH),
			s = e,
			c = t;
		r.areaH = s, r.alignY = s, n.areaY = s, n.alignY = s, n.areaH = c, i.areaY = s + c, i.alignY = s + c, i.areaH = a.areaH - (s + c), B(r, o), B(i, l), F(r), F(i)
	}
	function P() {
		var e = q(pt),
			t = Oe.areas[pt].decorateAreaTop,
			a = Oe.areas[pt].decorateAreaBorder,
			r = Oe.areas[pt].decorateAreaBottom,
			n = le(a.sku);
		if (0 == a.rotation) {
			if (a.rotation = 90, borderH = n.width, a.areaH > n.height) for (; borderH < a.areaH - n.width;) borderH += n.width
		} else if (a.rotation = 0, borderH = n.height, a.areaH > n.width) for (; borderH < a.areaH - n.height;) borderH += n.height;
		var i = borderH - a.areaH,
			o = a.areaY;
		t.areaH = o, t.alignY = o, a.areaY = o, a.alignY = o, a.areaH = borderH, r.areaY = o + borderH, r.alignY = o + borderH, r.areaH = e.areaH - (o + borderH), B(r, i), F(r), Re.disableRotateMode(), z(pt)
	}
	function D(e, t, a) {
		if (e) return !0;
		lt = ht, st = pt, ct = gt, dt = mt;
		var r = ["decorate-delete-single-tile", "decorate-move-single-tile"];
		return "TileZone" == gt.areaType && (Le || (ut = ft, r.push("decorate-delete-zone", "decorate-edit-zone"))), ("Tile" == Ue || "Grout" == Ue) && null != Ye && Le && ct.singleTiles[dt].sku != Ye.sku && se(Ye, gt.pattern) && r.push("decorate-change-single-tile"), Re.showDecorateOptionActions(r), !1
	}
	function I(e, t, a) {
		if (null == gt.sku) return e || (Te("You are in Single Tile mode. Change this in the bottom right panel and tile the whole surface before placing single tiles", 3e3), xe.broadcastMessage("TileSurfaceBeforePlacingSingleTile")), !1;
		if ("Indoor" == ne(pt) && "Outdoor" == Ye.canGoWhere) return e || Te("That tile cannot be laid indoors.", 1500), !1;
		if ("Outdoor" == ne(pt) && "Indoor" == Ye.canGoWhere) return e || Te("That tile cannot be laid outdoors.", 1500), !1;
		if ("Floor" == ie(pt)) {
			if ("Wood" == le(gt.sku).is) return e || Te("Cannot place single tiles on wood floors", 1500), !1;
			if ("Wall" == Ye.canGo) return e || (Te("That tile cannot be laid onto a floor.", 1500), xe.broadcastMessage("TileCannotGoOnFloor")), !1
		}
		if ("Wall" == ie(pt) && "Floor" == Ye.canGo) return e || (Te("That tile cannot be laid onto a wall.", 1500), xe.broadcastMessage("TileCannotGoOnWall")), !1;
		if ("BorderTile" == gt.areaType) return e || Te("Cannot place single tiles on borders", 1500), !1;
		if (!se(Ye, gt.pattern)) return e || Te("That single tile cannot be set in a " + ue(gt.pattern) + " pattern.", 1500), !1;
		if ("Herringbone" == gt.pattern || "BlockHerringbone" == gt.pattern) return e || (Te("You cannot add single tiles to a " + ue(gt.pattern) + " pattern.", 1500), xe.broadcastMessage("CannotAddSingleTilesToPattern")), !1;
		if ("Diamond" == gt.pattern) {
			var r = X(gt);
			if (Ye.width != r[0]) return e || Te("Singles tiles must be the same size as the base tile."), !1
		}
		var n = Ye.width,
			i = Ye.height;
		90 == gt.rotation && (n = Ye.height, i = Ye.width), "Diamond" == gt.pattern && (n /= Ie, i /= Ie);
		var o = new Object;
		o.areaW = n, o.areaH = i;
		var l = E(gt, o, t, a, "AutoLock");
		if (VUtils.isTabletOrPhoneDevice() || outlines.drawSingleTile(-1, -1, ht, l.x, l.y, n, i, gt.areaX, gt.areaY, gt.areaW, gt.areaH, gt.masksX1X2Y1Y2, gt.pattern, !0, !1, !1), e) return !0;
		et.push(VUtils.clone(Oe)), tt = new Array;
		var o = L(pt);
		return o.areaType = "SingleTile", o.sku = Ye.sku, o.grout = gt.grout, o.rotation = gt.rotation, "Diamond" == gt.pattern && (o.pattern = gt.pattern), W(o), o.areaX = l.x, o.areaY = l.y, o.alignX = o.areaX, o.alignY = o.areaY, gt.singleTiles.push(o), Ye.sku != jt && (jt = Ye.sku), z(pt), !0
	}
	function O(e, t, a) {
		function r() {
			et.push(VUtils.clone(Oe)), tt = new Array;
			var e = L(st);
			e.areaType = "SingleTile", e.sku = ct.singleTiles[dt].sku, e.grout = ct.grout, e.rotation = Gt.rotation, "Diamond" == Gt.pattern && (e.pattern = Gt.pattern), W(e), e.areaX = Et, e.areaY = Wt, e.alignX = e.areaX, e.alignY = e.areaY, Gt.singleTiles.push(e), ct.singleTiles.splice(dt, 1), z(st), st != Ft && z(Ft), outlines.setMode("None")
		}
		if (99999 == t && 99999 == a) return e ? !1 : (r(), !0);
		var n = t,
			i = a;
		Nt && (i += outlines.getSingleTileGrabHandleYOffset());
		var o = ct.singleTiles[dt],
			l = o.areaW,
			s = o.areaH;
		Gt.rotation != ct.rotation && (l = o.areaH, s = o.areaW), "Diamond" == o.pattern && "Diamond" != Gt.pattern ? (l *= Ie, s *= Ie) : "Diamond" != o.pattern && "Diamond" == Gt.pattern && (l /= Ie, s /= Ie);
		var c = !1;
		if (Nt) {
			var u = outlines.getSingleTileGrabHandle();
			outlines.isGrabDistance2(lt, n, i, u.x, u.y) && (c = !0)
		} else t >= Et && Et + l > t && a > Wt && Wt + s > a && (c = !0);
		return c ? (outlines.drawSingleTile(-1, -1, Yt, Et, Wt, l, s, Gt.areaX, Gt.areaY, Gt.areaW, Gt.areaH, Gt.masksX1X2Y1Y2, Gt.pattern, !0, !0, Nt), e || (Tt = n, kt = i, Dt = Yt, It = Ft, Ot = Gt, Mt = Et + o.areaW / 2, Bt = Wt + o.areaH / 2, outlines.setMode("DraggingSingleTile")), !0) : e ? (outlines.drawSingleTile(-1, -1, Yt, Et, Wt, l, s, Gt.areaX, Gt.areaY, Gt.areaW, Gt.areaH, Gt.masksX1X2Y1Y2, Gt.pattern, !1, !1, Nt), e || outlines.setMode("None"), !1) : (r(), !0)
	}
	function M(e, t, a) {
		var r = t,
			n = a;
		if (Nt && (n += outlines.getSingleTileGrabHandleYOffset()), Yt = ht, Ft = pt, Gt = gt, null == gt.sku) return Nt && outlines.drawSingleTileGrabHandleOnly(r, n, Yt), e || Se.doMoveSingleTile(!1), !1;
		if ("BorderTile" == gt.areaType) return Nt && outlines.drawSingleTileGrabHandleOnly(r, n, Yt), e || Se.doMoveSingleTile(!1), !1;
		var i = ct.singleTiles[dt];
		if (!se(le(i.sku), gt.pattern)) return Nt && outlines.drawSingleTileGrabHandleOnly(r, n, Yt), e || Se.doMoveSingleTile(!1), !1;
		if ("Herringbone" == gt.pattern || "BlockHerringbone" == gt.pattern) return Nt && outlines.drawSingleTileGrabHandleOnly(r, n, Yt), e || Se.doMoveSingleTile(!1), !1;
		t = Mt + t - Tt, a = Bt + n - kt;
		var o = E(gt, i, t, a, "AutoLock");
		Et = o.x, Wt = o.y;
		var l = i.areaW,
			s = i.areaH;
		if (gt.rotation != ct.rotation && (l = i.areaH, s = i.areaW), "Diamond" == ct.pattern && "Diamond" != gt.pattern ? (l *= Ie, s *= Ie) : "Diamond" != ct.pattern && "Diamond" == gt.pattern && (l /= Ie, s /= Ie), outlines.drawSingleTile(r, n, Yt, Et, Wt, l, s, gt.areaX, gt.areaY, gt.areaW, gt.areaH, gt.masksX1X2Y1Y2, gt.pattern, !0, !0, Nt), e) return !0;
		var c = Vt,
			u = ae(pt);
		return Wt + s / 2 > u.h / 4 * 3 && (c = -Vt), outlines.setSingleTileGrabHandle(ct.areaX, ct.areaY, ct.areaW, ct.areaH, c), outlines.drawSingleTile(-1, -1, Yt, Et, Wt, l, s, gt.areaX, gt.areaY, gt.areaW, gt.areaH, gt.masksX1X2Y1Y2, gt.pattern, !1, !1, Nt), outlines.setMode("WaitingToDragSingleTile"), !0
	}
	function B(e, t) {
		for (var a = 0; a < e.singleTiles.length; ++a) {
			var r = e.singleTiles[a];
			r.areaY += t, r.alignY += t
		}
	}
	function Y(e, t) {
		for (var a = 0; a < e.singleTiles.length; ++a) if (e.singleTiles[a].areaY > e.areaY + e.areaH) {
			var r = VUtils.clone(e.singleTiles[a]);
			t.singleTiles.push(r), e.singleTiles.splice(a, 1), --a
		}
	}
	function F(e) {
		for (var t = 0; t < e.singleTiles.length; ++t) {
			var a = e.singleTiles[t],
				r = !1;
			a.areaY + a.areaH <= e.areaY || a.areaY >= e.areaY + e.areaH ? r = !0 : ("Herringbone" == e.pattern || "BlockHerringbone" == e.pattern || "Diamond" == e.pattern && le(a.sku).width != le(a.sku).height) && (r = !0), r && (e.singleTiles.splice(t, 1), --t)
		}
	}
	function G(e) {
		var t = e.sku;
		"TileRange" == t && (t = e.skus[0]);
		for (var a = le(t), r = 0; r < e.singleTiles.length; ++r) {
			var n = e.singleTiles[r],
				i = le(n.sku);
			if ("Herringbone" == e.pattern || "BlockHerringbone" == e.pattern || "Diamond" == e.pattern && i.width != i.height || "Diamond" == e.pattern && (i.width != a.width || i.height != a.height)) e.singleTiles.splice(r, 1), --r;
			else if (i.width == a.width && i.height == a.height) {
				n.rotation != e.rotation && (n.rotation = e.rotation, W(n)), "Diamond" == e.pattern ? ("Diamond" != n.pattern && (n.areaW /= Ie, n.areaH /= Ie), n.pattern = e.pattern) : ("Diamond" == n.pattern && (n.areaW *= Ie, n.areaH *= Ie), n.pattern = "Linear");
				var o = E(e, n, n.areaX + n.areaW / 2, n.areaY + n.areaH / 2, "BaseTileOnly");
				n.areaX = o.x, n.areaY = o.y, n.alignX = n.areaX, n.alignY = n.areaY, (n.areaY + n.areaH <= e.areaY || n.areaY >= e.areaY + e.areaH) && (e.singleTiles.splice(r, 1), --r)
			}
		}
	}
	function E(e, t, a, r, n) {
		function i(e, t, a, r) {
			return e = a + Math.floor((e - a) / u) * u, t = r + Math.floor((t - r) / d) * d, new VPoint(e, t)
		}
		function o(e) {
			for (var t = [new VPoint(a, r), new VPoint(a + u, r), new VPoint(a + u, r + d), new VPoint(a, r + d)], n = 0; n < t.length; ++n) for (var i = 0; i < e.length; ++i) {
				var o = we(t[n].x, t[n].y, e[i].x, e[i].y);
				h > o && p > o && (p = o, g = e[i].x - (t[n].x - a), f = e[i].y - (t[n].y - r))
			}
		}
		function l(t, a, r, n, i) {
			for (var o = X(e), l = o[0], s = o[1], c = 0; c < i.length; ++c) {
				var u = we(t, a, i[c].x, i[c].y);
				h > u && p > u && (p = u, g = i[c].x, f = i[c].y)
			}
			for (var c = 0; c < i.length; ++c) {
				var u = we(t + r, a, i[c].x, i[c].y);
				h > u && p > u && (p = u, g = i[c].x - r, f = i[c].y)
			}
			for (var c = 0; c < i.length; ++c) {
				var u = we(t + r, a + n, i[c].x, i[c].y);
				h > u && p > u && (p = u, g = i[c].x - r, f = i[c].y - n)
			}
			for (var c = 0; c < i.length; ++c) {
				var u = we(t, a + n, i[c].x, i[c].y);
				h > u && p > u && (p = u, g = i[c].x, f = i[c].y - n)
			}
		}
		function s(e) {
			return [new VPoint(e.areaX, e.areaY), new VPoint(e.areaX + e.areaW, e.areaY), new VPoint(e.areaX + e.areaW, e.areaY + e.areaH), new VPoint(e.areaX, e.areaY + e.areaH)]
		}
		function c(a, r, i, o) {
			switch (e.pattern) {
			case "Linear":
				a = e.alignX + Math.floor((a - e.alignX) / i) * i, r = e.alignY + Math.floor((r - e.alignY) / o) * o;
				break;
			case "Brick":
				for (var l = e.alignY; l > e.areaY;) l -= o;
				var s = 1e4 - Math.floor((e.alignY - e.areaY) / o);
				s += Math.floor((r - l) / o), e.alignY == e.areaY && ++s;
				var c = 0;
				s % 2 == 1 && (c = i / 2), a = parseInt(c + e.alignX + Math.floor((a - e.alignX - c) / i) * i), r = e.alignY + Math.floor((r - e.alignY) / o) * o;
				break;
			case "3/4BrickBond":
				for (var l = e.alignY; l > e.areaY;) l -= o;
				var s = 1e4 - Math.floor((e.alignY - e.areaY) / o);
				s += Math.floor((r - l) / o), e.alignY == e.areaY && ++s;
				var c = 0;
				s % 2 == 1 && (c = i / 4), a = parseInt(-c + e.alignX + Math.floor((a - e.alignX + c) / i) * i), r = e.alignY + Math.floor((r - e.alignY) / o) * o;
				break;
			case "Diamond":
				"AutoLock" == n && (a += t.areaW / 2, r += t.areaH / 2);
				var u = Ie,
					d = a,
					h = r;
				a = e.alignX + Math.floor((a - e.alignX) / (i / u)) * i / u, r = e.alignY + Math.floor((r - e.alignY) / (o / u)) * o / u;
				var p = d - (a + i / u / 2),
					g = h - (r + o / u / 2);
				return -i / u / 2 > p + g ? (a -= i / u / 2, r -= o / u / 2) : p + g > i / u / 2 ? (a += i / u / 2, r += o / u / 2) : p - g > i / u / 2 ? (a += i / u / 2, r -= o / u / 2) : g - p > i / u / 2 && (a -= i / u / 2, r += o / u / 2), [new VPoint(a, r), new VPoint(a + i / Ie, r), new VPoint(a + i / Ie, r + o / Ie), new VPoint(a, r + o / Ie)]
			}
			return [new VPoint(a, r), new VPoint(a + i, r), new VPoint(a + i, r + o), new VPoint(a, r + o)]
		}
		var u = t.areaW,
			d = t.areaH,
			h = 30,
			p = 99999,
			g = -1,
			f = -1,
			m = X(e),
			v = m[0],
			b = m[1];
		if ("AutoLock" == n && (a -= t.areaW / 2, r -= t.areaH / 2), "BaseTileOnly" == n) {
			h = 99999;
			var T = c(a, r, v, b);
			return T = [T[0]], o(T), 99999 == p ? new VPoint(a, r) : new VPoint(g, f)
		}
		if ("NewTile" == n) {
			if ("Diamond" != e.pattern) for (var k = 0; k < e.singleTiles.length; ++k) {
				var w = e.singleTiles[k];
				if (a >= w.areaX - u && a < w.areaX + w.areaW + u && r >= w.areaY - d && r < w.areaY + w.areaH + d) {
					if (a >= w.areaX + w.areaW) return r < w.areaY ? i(a, r, w.areaX + w.areaW, w.areaY - d) : r >= w.areaY + w.areaH ? i(a, r, w.areaX + w.areaW, w.areaY + w.areaH) : i(a, r, w.areaX + w.areaW, w.areaY);
					if (a < w.areaX) return r < w.areaY ? i(a, r, w.areaX - u, w.areaY - d) : r >= w.areaY + w.areaH ? i(a, r, w.areaX - u, w.areaY + w.areaH) : i(a, r, w.areaX - u, w.areaY);
					if (r < w.areaY) return i(a, r, w.areaX, w.areaY - d);
					if (r >= w.areaY + w.areaH) return i(a, r, w.areaX, w.areaY + w.areaH)
				}
			}
			h = 99999;
			var T = c(a, r, v, b);
			return T = [T[0]], o(T), 99999 == p ? new VPoint(a, r) : new VPoint(g, f)
		}
		if ("AutoLock" == n) {
			var T = c(a, r, v, b);
			o(T);
			var T = c(a + u, r, v, b);
			o(T);
			var T = c(a + u, r + d, v, b);
			o(T);
			var T = c(a, r + d, v, b);
			if (o(T), "Diamond" != e.pattern) for (var k = 0; k < e.singleTiles.length; ++k) {
				var w = e.singleTiles[k],
					T = s(w);
				o(T)
			}
		}
		return 99999 == p ? new VPoint(a, r) : new VPoint(g, f)
	}
	function W(e) {
		var t = le(e.sku);
		"Diamond" == e.pattern ? (e.areaW = t.width / Ie, e.areaH = t.height / Ie) : 90 == e.rotation ? (e.areaW = t.height, e.areaH = t.width) : (e.areaW = t.width, e.areaH = t.height)
	}
	function L(e) {
		var t = q(e);
		return t.sku = null, t.skus = null, t.tileRangeAreaCoverage = null, t.grout = "FFFFFF", t.pattern = "Linear", t.rotation = "0", t.singleTiles = new Array, t
	}
	function q(e) {
		var t = new Object,
			a = be(e),
			r = Pe.findGridIndexWithName(a.gridName),
			n = Pe.getOutlineQuadMM(r),
			i = n[0],
			o = n[1];
		t.areaType = "TopTiles", t.areaX = parseInt(a.areaX1), t.areaY = parseInt(a.areaY1), t.areaW = parseInt(a.areaX2 - a.areaX1 + 1), t.areaH = parseInt(a.areaY2 - a.areaY1 + 1), 9999 == a.areaX2 && (t.areaW = i - t.areaX), 9999 == a.areaY2 && (t.areaH = o - t.areaY);
		var l = Pe.getOutlineAlignXYMM(r);
		return t.alignX = parseInt(l.x), t.alignY = parseInt(l.y), t.masksX1X2Y1Y2 = a.masksX1X2Y1Y2, t
	}
	function H(e, t) {
		e.sku = t.sku, e.skus = VUtils.clone(t.skus), e.tileRangeAreaCoverage = VUtils.clone(t.tileRangeAreaCoverage), e.grout = t.grout, e.pattern = t.pattern, e.rotation = t.rotation
	}
	function X(e) {
		var t = e.sku;
		"TileRange" == t && (t = e.skus[0]);
		var a = le(t),
			r = a.width,
			n = a.height;
		return "Mosaic" == a.type && (r /= Ye.smallMosaicsW, n /= Ye.smallMosaicsH), 90 == e.rotation ? [n, r] : [r, n]
	}
	function U(e, t) {
		if (Ye.sku != t.sku && ("Mosaic" == Ye.type ? t.rotation = 0 : t.rotation = 0), null != Ve) {
			t.sku = "TileRange", t.skus = new Array;
			for (var a = new Array, r = 0; r < Ve.length; ++r) Ne[r] && (t.skus.push(Ve[r].sku), a.push(je[r]));
			t.tileRangeAreaCoverage = makeTileRangeAreaCoverage(a)
		} else t.sku = Ye.sku, t.skus = null, t.tileRangeAreaCoverage = null;
		t.grout = Fe, ce(Ye, Xe) ? t.pattern = Xe : t.pattern = "Linear", "TileZone" != t.areaType && (Oe.areas[e].colour = null)
	}
	function V(e, t, a) {
		if (null == gt.sku) return e || (Te("Place tiles before grout", 1500), xe.broadcastMessage("CannotGroutWhereNoTiles")), !1;
		if (e) return !0;
		et.push(VUtils.clone(Oe)), tt = new Array, gt.grout = Fe;
		for (var r = 0; r < gt.singleTiles.length; ++r) gt.singleTiles[r].grout = gt.grout;
		return z(pt), !0
	}
	function N(e, t, a) {
		if (e) {
			if (null == gt.sku) return !1;
			var r = oe(gt);
			return r.width == r.height ? !1 : !0
		}
		if (null == gt.sku) return Te("No tiles to rotate", 1500), xe.broadcastMessage("NoTilesToRotate"), !1;
		var r = oe(gt);
		return r.width == r.height ? (Te("Cannot rotate square tiles", 1500), xe.broadcastMessage("CantRotateSquareTiles"), !1) : (et.push(VUtils.clone(Oe)), tt = new Array, 0 == gt.rotation ? gt.rotation = 90 : gt.rotation = 0, G(gt), z(pt), Re.disableRotateMode(), !0)
	}
	function j(e, t, a) {
		if (e) {
			if (null == gt.sku) return !1;
			var r = oe(gt);
			return ce(r, Xe) ? !0 : !1
		}
		if (null == gt.sku) return Te("No tiles to change", 1500), xe.broadcastMessage("PatternChangeNoTiles"), !1;
		var r = oe(gt);
		if (!ce(r, Xe)) return Te("That tile cannot be set in a " + ue(Xe) + " pattern.", 1500), xe.broadcastMessage("PatternChangePatternNotAllowed"), !1;
		et.push(VUtils.clone(Oe)), tt = new Array, gt.pattern = Xe, G(gt);
		var n = null;
		if ("TopTiles" == gt.areaType ? n = Oe.areas[pt].decorateAreaBottom : "BottomTiles" == gt.areaType && (n = Oe.areas[pt].decorateAreaTop), null != n) {
			var r = oe(n);
			ce(r, Xe) && (n.pattern = Xe, G(n))
		}
		return z(pt), Re.disablePatternMode(), !0
	}
	function Z(e) {
		setTimeout(function() {
			e()
		}, 100)
	}
	function _(e, t) {
		function a(e, t, a) {
			if (null != t) if (a && null == t.sku) {
				var r = new Object;
				r.type = "EmptyZone", r.decorateArea = t, r.wholeAreaMask = ae(e), r.singleTileMask = null, o.push(r)
			} else if (null == t.sku) {
				var r = new Object;
				r.type = "Blank", r.wholeAreaMask = null, r.singleTileMask = null, o.push(r)
			} else {
				if ("TileRange" == t.sku) for (var n = 0; n < t.skus.length; ++n) {
					var r = new Object;
					r.type = "Normal", r.tileRangeNum = n, r.decorateArea = t, r.wholeAreaMask = ae(e), r.singleTileMask = null, o.push(r)
				} else {
					var r = new Object;
					r.type = "Normal", r.tileRangeNum = -1, r.decorateArea = t, r.wholeAreaMask = ae(e), r.singleTileMask = null, o.push(r)
				}
				for (var i = 0; i < t.singleTiles.length; ++i) {
					var r = new Object;
					r.type = "Normal", r.tileRangeNum = -1, r.decorateArea = t.singleTiles[i], r.wholeAreaMask = ae(e), r.singleTileMask = {
						x: t.areaX,
						y: t.areaY,
						w: t.areaW,
						h: t.areaH
					}, o.push(r)
				}
			}
		}
		for (var r = Pe.getOutlineQuadMM(t), n = r[0], i = r[1], o = new Array, l = Be, s = 0; s < l.tileAreaIds.length; ++s) for (var c = 0; c < Ce.tileAreas.length; ++c) {
			var u = Ce.tileAreas[c];
			if (u.id == l.tileAreaIds[s] && Pe.findGridIndexWithName(u.gridName) == t) {
				var d = u.areaName;
				if ("Tile" != u.type) {
					var h = new Object;
					h.type = "Colour", h.colour = e.areas[d].colour, o.push(h)
				} else if (null != e.areas[d].colour) {
					var h = new Object;
					h.type = "TextureColour", h.colour = e.areas[d].colour, h.decorateArea = e.areas[d].decorateAreaTop, o.push(h);
					for (var p = 0; p < e.areas[d].decorateAreaZones.length; ++p) a(d, e.areas[d].decorateAreaZones[p], !0)
				} else {
					a(d, e.areas[d].decorateAreaTop, !1), a(d, e.areas[d].decorateAreaBorder, !1), a(d, e.areas[d].decorateAreaBottom, !1);
					for (var p = 0; p < e.areas[d].decorateAreaZones.length; ++p) a(d, e.areas[d].decorateAreaZones[p], !0)
				}
			}
		}
		return o
	}
	function z(e) {
		if (Re.usingWebGL()) for (var t = te(Oe, e), a = 0; a < t.length; ++a) {
			var r = t[a],
				n = Pe.findGridIndexWithName(r.gridName); - 1 == ze.indexOf(n) && ze.push(n)
		}
	}
	function Q(e, t) {
		function a(e, t) {
			if (null == e && null != t) return !0;
			if (null != e && null == t) return !0;
			if (null == e && null == t) return !1;
			if (e.sku != t.sku) return !0;
			if (null != e.sku) {
				if (e.grout != t.grout || e.pattern != t.pattern || e.rotation != t.rotation) return !0;
				if ("TileRange" == e.sku) {
					if (e.skus.length != t.skus.length) return !0;
					for (var a = 0; a < e.tileRangeAreaCoverage.length; ++a) for (var r = 0; r < e.tileRangeAreaCoverage[a].length; ++r) if (e.tileRangeAreaCoverage[a][r] != t.tileRangeAreaCoverage[a][r]) return !0
				}
			}
			if (e.areaX != t.areaX) return !0;
			if (e.areaY != t.areaY) return !0;
			if (e.areaW != t.areaW) return !0;
			if (e.areaH != t.areaH) return !0;
			if (e.singleTiles.length != t.singleTiles.length) return !0;
			for (var a = 0; a < e.singleTiles.length; ++a) {
				if (e.singleTiles[a].sku != t.singleTiles[a].sku) return !0;
				if (e.singleTiles[a].areaX != t.singleTiles[a].areaX) return !0;
				if (e.singleTiles[a].areaY != t.singleTiles[a].areaY) return !0;
				if (e.singleTiles[a].areaW != t.singleTiles[a].areaW) return !0;
				if (e.singleTiles[a].areaH != t.singleTiles[a].areaH) return !0
			}
			return !1
		}
		for (var r in e.areas) {
			var n = r;
			if ("Tile" == ve(n)) {
				if (e.areas[n].colour != t.areas[n].colour) z(n);
				else if (a(e.areas[n].decorateAreaTop, t.areas[n].decorateAreaTop)) z(n);
				else if (a(e.areas[n].decorateAreaBorder, t.areas[n].decorateAreaBorder)) z(n);
				else if (a(e.areas[n].decorateAreaBottom, t.areas[n].decorateAreaBottom)) z(n);
				else if (e.areas[n].decorateAreaZones.length != t.areas[n].decorateAreaZones.length) z(n);
				else
				for (var i = 0; i < e.areas[n].decorateAreaZones.length; ++i) if (a(e.areas[n].decorateAreaZones[i], t.areas[n].decorateAreaZones[i])) {
					z(n);
					break
				}
			} else e.areas[n].colour != t.areas[n].colour && z(n)
		}
	}
	function K() {
		if (Re.usingWebGL()) {
			ze = new Array;
			for (var e = 0; e < Pe.getNumGrids(); ++e) ze.push(e)
		}
	}
	function J() {
		if (Re.usingWebGL()) for (var e in Oe.areas) {
			var t = e,
				a = Oe.areas[t],
				r = !1;
			null != a.colour ? r = !0 : "Tile" == ve(t) && (null != a.decorateAreaTop.sku && (r = !0), null != a.decorateAreaBottom && null != a.decorateAreaBottom.sku && (r = !0), null != a.decorateAreaBorder && null != a.decorateAreaBorder.sku && (r = !0), a.decorateAreaZones.length > 0 && (r = !0)), r && z(t)
		}
	}
	function ee() {
		for (var e in Oe.areas) {
			var t = e,
				a = Oe.areas[t];
			if ("Tile" == ve(t)) {
				if (null == a.colour) {
					if (null != a.decorateAreaTop.sku && a.decorateAreaTop.singleTiles.length > 0) return !0;
					if (null != a.decorateAreaBottom && null != a.decorateAreaBottom.sku && a.decorateAreaBottom.singleTiles.length > 0) return !0
				}
				for (var r = 0; r < a.decorateAreaZones.length; ++r) if (a.decorateAreaZones[r].singleTiles.length > 0) return !0
			}
		}
		return !1
	}
	function te(e, t) {
		tileAreasList = new Array;
		for (var a = ge(e.roomId), r = e.areas[t], n = e.roomId.replace("Room", "Room ") + " " + t.replace("Area", "Area "), i = 0; i < a.tileAreaIds.length; ++i) if (-1 != a.tileAreaIds[i].indexOf(n)) for (var o = 0; o < Ce.tileAreas.length; ++o) {
			var l = Ce.tileAreas[o];
			l.id == a.tileAreaIds[i] && tileAreasList.push(l)
		}
		return tileAreasList
	}
	function ae(e) {
		var t = new Object;
		return t.x = Oe.areas[e].decorateAreaTop.areaX, t.y = Oe.areas[e].decorateAreaTop.areaY, t.w = Oe.areas[e].decorateAreaTop.areaW, t.h = Oe.areas[e].decorateAreaTop.areaY + Oe.areas[e].decorateAreaTop.areaH, null != Oe.areas[e].decorateAreaBottom && (t.h = Oe.areas[e].decorateAreaBottom.areaY + Oe.areas[e].decorateAreaBottom.areaH - Oe.areas[e].decorateAreaTop.areaY), t
	}
	function re(e, t, a) {
		var r = Pe.getGridIndexAtScreenXY(e, t, a);
		if (-1 == r) return null;
		for (var n = Pe.getGridName(r), i = Be.id.replace("Room", "Room ") + " ", o = 0; o < Ce.tileAreas.length; ++o) {
			var l = Ce.tileAreas[o];
			if (-1 != l.id.indexOf(i) && l.gridName == n) {
				if ("Tile" != l.type) return l.areaName;
				if ("" != l.mirrorLinkAreaName) return null;
				var s = Pe.getTextureXYAtScreenXY(r, e, t),
					c = s.x,
					u = s.y;
				if (c >= l.areaX1 && c <= l.areaX2 && u >= l.areaY1 && u <= l.areaY2) {
					for (var d = !1, h = 0; h < l.masksX1X2Y1Y2.length; ++h) {
						var p = l.masksX1X2Y1Y2[h];
						if ("" != p && "-" != p) {
							var g = p.split(","),
								f = parseInt(g[0]),
								m = parseInt(g[1]),
								v = parseInt(g[2]),
								b = parseInt(g[3]);
							if (c >= f && m >= c && u >= v && b >= u) {
								d = !0;
								break
							}
						}
					}
					if (!d) return l.areaName
				}
			}
		}
		return null
	}
	function ne(e) {
		var t = Be.id.replace("Room", "Room ");
		t += " " + e.replace("Area", "Area ");
		for (var a = 0; a < Ce.tileAreas.length; ++a) {
			var r = Ce.tileAreas[a];
			if (-1 != r.id.indexOf(t) && "" != r.outdoor) return "Outdoor"
		}
		return "Indoor"
	}
	function ie(e) {
		var t = Be.id.replace("Room", "Room ");
		t += " " + e.replace("Area", "Area ");
		for (var a = 0; a < Ce.tileAreas.length; ++a) {
			var r = Ce.tileAreas[a];
			if (-1 != r.id.indexOf(t) && -1 != r.gridName.toLowerCase().indexOf("floor")) return "Floor"
		}
		return "Wall"
	}
	function oe(e) {
		return "TileRange" == e.sku ? tile = le(e.skus[0]) : tile = le(e.sku), tile
	}
	function le(e) {
		for (var t = 0; t < Ce.tiles.length; ++t) if (Ce.tiles[t].sku == e) return Ce.tiles[t];
		return null
	}
	function se(e, t) {
		return "Diamond" == t && e.width != e.height ? !1 : "Herringbone" != t && "BlockHerringbone" != t || e.width != e.height ? !0 : !1
	}
	function ce(e, t) {
		return "Linear" != t && "Wood" == e.is ? !1 : "Diamond" == t && e.width != e.height ? !1 : "Herringbone" != t && "BlockHerringbone" != t || e.width != e.height ? -1 != e.patternsAllowed.indexOf(",All,") ? !0 : -1 != e.patternsAllowed.indexOf("," + t + ",") ? !0 : !1 : !1
	}
	function ue(e) {
		for (var t = 0; t < it.length; ++t) if (it[t] == e) return ot[t];
		return ""
	}
	function de(e, t, a) {
		var r = he(e);
		return null == a ? r : "SingleTile" != t && "BorderTile" != t && r.shininess > a.shininess ? r : a
	}
	function he(e) {
		var t = new Object;
		return t.normalScale = 1, t.reflectivity = 0, t.shininess = 6, t.HDRalpha = .7, null == e ? t : ("polished" == e.lighting.toLowerCase() ? (t.normalScale = 1, t.reflectivity = 1, t.shininess = 50, t.HDRalpha = 1) : "glazed" == e.lighting.toLowerCase() ? (t.normalScale = 1, t.reflectivity = 1, t.shininess = 45, t.HDRalpha = 1) : "gloss" == e.lighting.toLowerCase() ? (t.normalScale = 1, t.reflectivity = .9, t.shininess = 40, t.HDRalpha = .9) : "satin" == e.lighting.toLowerCase() && (t.normalScale = 1, t.reflectivity = .4, t.shininess = 20, t.HDRalpha = 1), t)
	}
	function pe(e) {
		var t = new Object;
		return t.normalScale = 1, t.reflectivity = 0, t.shininess = 6, t.HDRalpha = .7, null == e ? t : (-1 != e.finish.toLowerCase().indexOf(",polished,") ? (t.normalScale = 1, t.reflectivity = 1, t.shininess = 50, t.HDRalpha = 1) : -1 != e.finish.toLowerCase().indexOf(",glazed,") ? (t.normalScale = 1, t.reflectivity = 1, t.shininess = 45, t.HDRalpha = 1) : -1 != e.finish.toLowerCase().indexOf(",gloss,") ? (t.normalScale = 1, t.reflectivity = .9, t.shininess = 40, t.HDRalpha = .9) : -1 != e.finish.toLowerCase().indexOf(",satin,") && (t.normalScale = 1, t.reflectivity = .4, t.shininess = 20, t.HDRalpha = 1), t)
	}
	function ge(e) {
		for (var t = 0; t < Ce.rooms.length; ++t) if (Ce.rooms[t].id == e) return Ce.rooms[t];
		return null
	}
	function fe(e, t, a) {
		if ("Tile" != ve(e)) return new VPoint(0, 0);
		var r = me(e);
		return Pe.getTextureXYAtScreenXY(r, t, a)
	}
	function me(e) {
		var t = be(e),
			a = Pe.findGridIndexWithName(t.gridName);
		return a
	}
	function ve(e) {
		var t = be(e);
		return t.type
	}
	function be(e) {
		var t = Be.id.replace("Room", "Room ");
		t += " " + e.replace("Area", "Area ");
		for (var a = 0; a < Ce.tileAreas.length; ++a) {
			var r = Ce.tileAreas[a];
			if (-1 != r.id.indexOf(t)) return r
		}
		throw vobj(Ce.tileAreas), vout("ERROR: getAreaRefTileArea(): curRoom=" + Be.id + " areaRef=" + e), vout("tileAreaRef=" + t), "error"
	}
	function Te(e, t) {
		return vout("*** TT ShowMessage(): " + e), null != _e && (clearTimeout(_e), _e = null), null == e ? void $(".vit-message").hide() : ($(".vit-message img").hide(), $(".vit-message p").html(e), $(".vit-message").show(), void(void 0 != t && (_e = setTimeout(function() {
			_e = null, $(".vit-message").hide()
		}, t))))
	}
	function ke(e) {
		var t = e;
		return t
	}
	function we(e, t, a, r) {
		var n = Math.sqrt(Math.abs(a - e) * Math.abs(a - e) + Math.abs(r - t) * Math.abs(r - t));
		return n
	}
	function ye() {
		Oe = Re.getData().curDecorateData, Me = Re.getData().curRoomStylesModeOn, Ue = Re.getData().curDecorateMode, Be = Re.getData().curRoom, Ye = Re.getData().curTile, Fe = Re.getData().curGroutColour, Ge = Re.getData().curWallColour, Ee = Re.getData().curCabinetColour, We = Re.getData().curWorktopColour, Le = Re.getData().curSingleTileMode, qe = Re.getData().curRotateProductMode, He = Re.getData().curChangePatternMode, Xe = Re.getData().curPattern, Ve = Re.getData().curTilingAsRangeTiles, Ne = Re.getData().curTilingAsRangeEnable, je = Re.getData().curTilingAsRangePercentages
	}
	function $e(e, t, a, r) {
		var n = {
			base64Data: e.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, ""),
			folder: t,
			filename: a
		};
		$.post("vsavebase64.php", n, function(e) {
			null != r && r()
		})
	}
	var Se = this,
		xe = e,
		Re = t,
		Ae = a,
		Ce = r,
		Pe = n,
		De = i,
		Ie = .7071067811881,
		Oe = null,
		Me = !1,
		Be = null,
		Ye = null,
		Fe = null,
		Ge = null,
		Ee = null,
		We = null,
		Le = null,
		qe = null,
		He = null,
		Xe = null,
		Ue = null,
		Ve = null,
		Ne = null,
		je = null,
		Ze = !0,
		_e = null,
		ze = new Array,
		Qe = !1,
		Ke = !1,
		Je = !1,
		et = new Array,
		tt = new Array,
		at = null,
		rt = null;
	Re.usingWebGL() && (ye(), at = new SupertextureWebGL(100, 100, "FFFFFF", Pe.getColourTextureCanvas()), rt = new SupertextureWebGL(100, 100, "7F7FFF", Pe.getNormalTextureCanvas()));
	var nt = new VTileSet,
		it = ["Linear", "Brick", "Diamond", "Herringbone", "BlockHerringbone", "3/4BrickBond"],
		ot = ["Linear", "Brick", "Diamond", "Herringbone", "Block Herringbone", "&frac34; Brick Bond"],
		lt = -1,
		st = null,
		ct = null,
		ut = -1,
		dt = -1,
		ht = -1,
		pt = null,
		gt = null,
		ft = -1,
		mt = -1,
		vt = -1,
		bt = -1,
		Tt = -1,
		kt = -1,
		wt = "",
		yt = -1,
		$t = -1,
		St = -1,
		xt = -1,
		Rt = -1,
		At = -1,
		Ct = -1,
		Pt = -1,
		Dt = -1,
		It = null,
		Ot = -1,
		Mt = -1,
		Bt = -1,
		Yt = -1,
		Ft = -1,
		Gt = -1,
		Et = -1,
		Wt = -1,
		Lt = -1,
		qt = -1,
		Ht = -1,
		Xt = -1,
		Ut = 150;
	VUtils.isTabletOrPhoneDevice() && (Ut = 300);
	var Vt = 300,
		Nt = !1;
	VUtils.isTabletOrPhoneDevice() && (Nt = !0);
	var jt = "";
	this.renderUndecoratedStockScene = function() {
		var e = new Array(Pe.getNumGrids());
		for (var t in Oe.areas) {
			var a = t,
				r = be(a);
			"" != r.mirrorLinkAreaName ? colour = "#ffffff" : colour = "#" + Re.getUndecoratedColourRRGGBB();
			for (var n = te(Oe, a), i = 0; i < n.length; ++i) {
				var r = n[i],
					o = Pe.findGridIndexWithName(r.gridName);
				e[o] = colour
			}
		}
		Pe.renderUndecoratedStockScene(e)
	}, this.getSortedTilesUsed = function() {
		function e(e) {
			if (null != e && null != e.sku) {
				if ("TileRange" == e.sku) for (var a = 0; a < e.skus.length; ++a) - 1 == t.indexOf(e.skus[a]) && t.push(e.skus[a]);
				else - 1 == t.indexOf(e.sku) && t.push(e.sku);
				for (var a = 0; a < e.singleTiles.length; ++a) - 1 == t.indexOf(e.singleTiles[a].sku) && t.push(e.singleTiles[a].sku)
			}
		}
		var t = new Array;
		for (var a in Oe.areas) {
			var r = a,
				n = Oe.areas[r];
			if ("Tile" == ve(r)) {
				e(Oe.areas[r].decorateAreaTop), e(Oe.areas[r].decorateAreaBorder), e(Oe.areas[r].decorateAreaBottom);
				for (var i = 0; i < Oe.areas[r].decorateAreaZones.length; ++i) e(Oe.areas[r].decorateAreaZones[i])
			}
		}
		return t.length > 1 && t.sort(function(e, t) {
			return le(e).sortOrder - le(t).sortOrder
		}), t
	}, this.abort = function() {
		"None" != outlines.getMode() ? outlines.setMode("None") : Le && outlines.clear()
	}, this.newRoomLoading = function() {
		ye(), Ze = !0
	}, this.roomLoaded = function(e) {
		if (ye(), Ze = !1, e) Oe = new Object, Oe.roomId = Be.id, Oe.areas = new Object, o(), Re.setNewCurDecorateData(Oe);
		else
		for (var t in Oe.areas) {
			var a = t,
				r = Oe.areas[a];
			null != r.sku && "TileRange" != r.sku && null == le(r.sku) && (r.sku = null)
		}
		et = new Array, tt = new Array, outlines.setupNewRoom(Be)
	}, this.setInitialDecoration = function() {
		ye(), J()
	}, this.predecorateInitialRoom = function(e) {
		ye();
		var t = le(e);
		for (var a in Oe.areas) {
			var r = a;
			if (!("Indoor" == ne(r) && "Outdoor" == t.canGoWhere || "Outdoor" == ne(r) && "Indoor" == t.canGoWhere || "Floor" == ie(r) && "Wall" == t.canGo || "Wall" == ie(r) && "Floor" == t.canGo)) {
				var n = Oe.areas[r].decorateAreaTop;
				n.sku = t.sku, n.skus = null, n.tileRangeAreaCoverage = null, n.grout = "FFFFFF", ce(t, "Brick") ? n.pattern = "Brick" : n.pattern = "Linear", n.rotation = 0, n.colour = null
			}
		}
		J(), Re.refreshDecorate()
	}, this.isRoomDecorated = function() {
		if (null == Oe) return !1;
		for (var e in Oe.areas) {
			var t = e,
				a = Oe.areas[t];
			if (null != a.colour) return !0;
			if ("Tile" == ve(t)) {
				if (null != a.decorateAreaTop.sku) return !0;
				if (null != a.decorateAreaBottom && null != a.decorateAreaBottom.sku) return !0;
				if (null != a.decorateAreaBorder && null != a.decorateAreaBorder.sku) return !0;
				if (a.decorateAreaZones.length > 0) return !0
			}
		}
		return !1
	}, this.roomContainsSingleTiles = function() {
		return ee()
	}, this.clearAll = function() {
		et.push(VUtils.clone(Oe)), tt = new Array, o(), Q(et[et.length - 1], Oe)
	}, this.undo = function() {
		et.length > 0 && (Q(Oe, et[et.length - 1]), tt.push(Oe), Oe = VUtils.clone(et.pop()), Re.setNewCurDecorateData(Oe))
	}, this.redo = function() {
		tt.length > 0 && (Q(Oe, tt[tt.length - 1]), et.push(VUtils.clone(Oe)), Oe = VUtils.clone(tt.pop()), Re.setNewCurDecorateData(Oe))
	}, this.anythingToUndo = function() {
		return et.length > 0 ? !0 : !1
	}, this.anythingToRedo = function() {
		return tt.length > 0 ? !0 : !1
	}, this.canDecorate = function(e, t) {
		return ye(), Me ? VUtils.isTabletOrPhoneDevice() ? !1 : l(!0, e, t) : s(!0, e, t)
	}, this.decorate = function(e, t) {
		return ye(), Me ? VUtils.isTabletOrPhoneDevice() ? l(!0, e, t) : !1 : s(!1, e, t) ? (Qe ? (Qe = !1, Re.refreshDecorate("ShowEditZoneMessage")) : Je ? (Ke = !1, Je = !1, Re.refreshDecorate("ShowSelectTilesPopup")) : Re.refreshDecorate(), !0) : !1
	}, this.doAddZone = function() {
		VUtils.isTabletOrPhoneDevice() ? Te("Tap on a surface to create a tile area.", 3e4) : Te("Click on a surface to create a tile area.", 3e4), outlines.setMode("WaitingToAddZone"), Ke = !0, Je = !1
	}, this.doTileZone = function() {
		m(!1, vt, bt) && Re.refreshDecorate()
	}, this.doGroutZone = function() {
		V(!1, vt, bt), Re.refreshDecorate()
	}, this.doDeleteZone = function() {
		et.push(VUtils.clone(Oe)), tt = new Array, vobj(Oe.areas[st]), Oe.areas[st].decorateAreaZones.splice(ut, 1), z(st), Re.refreshDecorate()
	}, this.doEditZone = function(e) {
		if (e) {
			var t = Oe.areas[st].decorateAreaZones[ut];
			Rt = t.areaX, At = t.areaY, Ct = t.areaW, Pt = t.areaH, VUtils.isTabletOrPhoneDevice() ? Te("Edit the tile area and then tap the OK button to finish.", 1500) : Te("Edit the tile area and then click the OK button to finish.", 1500)
		} else Rt = yt, At = $t, Ct = St, Pt = xt;
		outlines.drawZone(lt, Rt, At, Ct, Pt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), outlines.setMode("WaitingToEditZone")
	}, this.doEditBorder = function(e) {
		e ? (Ht = ct.areaY, Xt = ct.areaH, VUtils.isTabletOrPhoneDevice() ? Te("Edit the border and then tap the OK button to finish.", 1500) : Te("Edit the border and then click the OK button to finish.", 1500)) : (Ht = Lt, Xt = qt), outlines.setBorderGrabHandles(lt, Ht, Xt, ct.areaX, ct.areaW, Ut), outlines.drawBorder(lt, Ht, Xt, Oe.areas[st], ct.masksX1X2Y1Y2, !1, !0, ""), outlines.setMode("WaitingToEditBorder")
	}, this.doDeleteBorder = function() {
		et.push(VUtils.clone(Oe)), tt = new Array;
		var e = Oe.areas[pt].decorateAreaTop,
			t = Oe.areas[pt].decorateAreaBorder,
			a = Oe.areas[pt].decorateAreaBottom,
			r = -t.areaH;
		e.areaH += t.areaH + a.areaH, B(a, r);
		for (var n = 0; n < a.singleTiles.length; ++n) {
			var i = VUtils.clone(a.singleTiles[n]);
			e.singleTiles.push(i)
		}
		Oe.areas[pt].decorateAreaBorder = null, Oe.areas[pt].decorateAreaBottom = null, z(st), Re.refreshDecorate()
	}, this.doGroutBorder = function() {
		et.push(VUtils.clone(Oe)), tt = new Array, R(), Re.refreshDecorate()
	}, this.doChangeBorder = function() {
		et.push(VUtils.clone(Oe)), tt = new Array, A(), Re.refreshDecorate()
	}, this.doMosaicBorder = function() {
		y(!1, vt, bt), Re.refreshDecorate()
	}, this.doMosaicFill = function() {
		m(!1, vt, bt), Re.refreshDecorate()
	}, this.doMoveSingleTile = function(e) {
		var t = ct.singleTiles[dt];
		e ? (Yt = lt, Ft = st, Gt = ct, Et = t.areaX, Wt = t.areaY, Te("Move the single tile to a new position.", 1500)) : (Yt = Dt, Ft = It, Gt = Ot, Et = Mt - t.areaW / 2, Wt = Bt - t.areaH / 2);
		var a = Vt,
			r = ae(pt);
		Wt + t.areaH / 2 > r.h / 4 * 3 && (a = -Vt), outlines.setSingleTileGrabHandle(ct.areaX, ct.areaY, ct.areaW, ct.areaH, a);
		var n = t.areaW,
			i = t.areaH;
		Gt.rotation != ct.rotation && (n = t.areaH, i = t.areaW), "Diamond" == t.pattern && "Diamond" != Gt.pattern ? (n *= Ie, i *= Ie) : "Diamond" != t.pattern && "Diamond" == Gt.pattern && (n /= Ie, i /= Ie), outlines.drawSingleTile(-1, -1, Yt, Et, Wt, n, i, Gt.areaX, Gt.areaY, Gt.areaW, Gt.areaH, Gt.masksX1X2Y1Y2, Gt.pattern, !1, !1, Nt), outlines.setMode("WaitingToDragSingleTile")
	}, this.doDeleteSingleTile = function() {
		et.push(VUtils.clone(Oe)), tt = new Array, ct.singleTiles.splice(dt, 1), z(st), Re.refreshDecorate()
	}, this.doChangeSingleTile = function() {
		et.push(VUtils.clone(Oe)), tt = new Array;
		var e = ct.singleTiles[dt],
			t = e.areaX + e.areaW / 2,
			a = e.areaY + e.areaH / 2;
		e.sku = Ye.sku, W(e), z(st), Re.refreshDecorate()
	}, this.getWebGLRoomRenderCanvas = function(e) {
		function t(e, r, n, o) {
			if (n == r.length) return void o();
			var l = Pe.getOutlineQuadMM(s),
				c = l[0],
				d = l[1],
				h = r[n];
			0 == n && (e ? at.reuse(c, d, Re.getUndecoratedColourRRGGBB(), !1) : rt.reuse(c, d, "7F7FFF", !1));
			var p = h.sku;
			if ("Blank" == h.type) {
				for (var g = !0, f = 0; f < r.length; ++f) if ("Blank" != r[f].type) {
					g = !1;
					break
				}
				g && (u.colourRRGGBB = Re.getUndecoratedColourRRGGBB(), u.type = "Colour"), t(e, r, n + 1, o)
			} else if ("Colour" == h.type) u.colourRRGGBB = h.colour, null == h.colour && (u.colourRRGGBB = "FFFFFF"), u.type = "Colour", t(e, r, n + 1, o);
			else if ("TextureColour" == h.type) {
				u.lighting = de(null, "", u.lighting), u.type = "Texture";
				var m = h.decorateArea;
				e ? (at.colourArea(h.colour, m.areaX, m.areaY, m.areaW, m.areaH, h.wholeAreaMask, m.masksX1X2Y1Y2), u.supertexture = at, u.supertextureCanvas = at.getCanvas()) : (rt.colourArea("FF7FFF", m.areaX, m.areaY, m.areaW, m.areaH, h.wholeAreaMask, m.masksX1X2Y1Y2), u.supernormal = rt, u.supernormalCanvas = rt.getCanvas()), t(e, r, n + 1, o)
			} else if ("EmptyZone" == h.type) {
				u.lighting = de(null, "", u.lighting), u.type = "Texture";
				var m = h.decorateArea;
				e ? (at.colourZone("C0C0FF", "000000", 3, m.areaX, m.areaY, m.areaW, m.areaH, h.wholeAreaMask, m.masksX1X2Y1Y2), u.supertexture = at, u.supertextureCanvas = at.getCanvas()) : (rt.colourArea("FF7FFF", m.areaX, m.areaY, m.areaW, m.areaH, h.wholeAreaMask, m.masksX1X2Y1Y2), u.supernormal = rt, u.supernormalCanvas = rt.getCanvas()), t(e, r, n + 1, o)
			} else {
				var m = h.decorateArea,
					p = m.sku;
				"TileRange" == p && (p = m.skus[h.tileRangeNum]);
				var v = h.wholeAreaMask,
					b = h.singleTileMask,
					T = le(p),
					k = m.pattern;
				"Wood" == T.is && (k = "StaggerWood"), "SingleTile" == m.areaType && "Diamond" == k && (k = "SingleTileDiamond");
				var w = !1;
				90 == m.rotation && (w = !0);
				var y = "Wall"; - 1 != Pe.getGridName(s).indexOf("FLOOR") && (y = "Floor"), u.lighting = de(T, m.areaType, u.lighting), u.type = "Texture";
				var S = !1;
				"" != i.dontAddVerticalGroutAtAlignmentPoint && (S = !0), vtime("...loading tile set"), a(T, e, function() {
					vtime("...loaded tile set"), e ? (at.tileAndGroutArea(y, k, w, T, m.areaX, m.areaY, m.areaW, m.areaH, v, b, nt, m.alignX, m.alignY, m.grout, m.masksX1X2Y1Y2, m.tileRangeAreaCoverage, h.tileRangeNum, S), u.supertexture = at, u.supertextureCanvas = at.getCanvas()) : (rt.tileAndGroutArea(y, k, w, T, m.areaX, m.areaY, m.areaW, m.areaH, v, b, nt, m.alignX, m.alignY, "7F7FFF", m.masksX1X2Y1Y2, m.tileRangeAreaCoverage, h.tileRangeNum, S), u.supernormal = rt, u.supernormalCanvas = rt.getCanvas()), t(e, r, n + 1, o)
				})
			}
		}
		function a(e, t, a) {
			var r = !1;
			"Mosaic" == e.type && (r = !0), nt.setup(e.sku, r), "x" != e.addNoEdgeGrout && nt.setAddGroutThickness(Re.getAddGroutThickness());
			var n = "tiles/" + e.sku + "_c.png?" + uncache;
			t || (n = "tiles/" + e.sku + "_n.png?" + uncache), VUtils.isTabletOrPhoneDevice(), -1 != location.href.indexOf("testnewvariations") && (n = n.replace("tiles/", "tiles-new-variations/")), nt.load(ke(n), function() {
				a()
			})
		}
		function r(t) {
			for (var a = new Array, r = 0; r < Pe.getNumGrids(); ++r) a.push(null);
			a[s] = t, Pe.renderStockScene(a), Z(function() {
				Se.getWebGLRoomRenderCanvas(e)
			})
		}
		vout("getWebGLRoomRenderCanvas"), vtime("getWebGLRoomRenderCanvas(): Start"), setWebGLTesting(), ye();
		var n = Oe,
			i = Be;
		if (0 == ze.length) return vtime("getWebGLRoomRenderCanvas(): End"), setWebGLOK(), void e(Pe.getRenderedSceneCanvas());
		for (var o = new Array, l = 0; l < Pe.getNumGrids(); ++l) o.push(null);
		var s = ze.pop();
		vobj("REDRAWING GRID INDEX " + s);
		var c = _(n, s),
			u = new Object;
		u.lighting = null, t(!0, c, 0, function() {
			t(!1, c, 0, function() {
				r(u)
			})
		})
	}
}
function makeTileRangeAreaCoverage(e) {
	for (var t = 10, a = 10, r = getRandomTileSet(t, a, e), n = new Array, i = 0; 10 > i; ++i) {
		n.push(new Array);
		for (var o = 0; 10 > o; ++o) n[n.length - 1].push(r[o * t + i])
	}
	return n
}
function old_simple_makeTileRangeAreaCoverage(e) {
	vobj(e);
	for (var t = new Array, a = 0; a < e.length; ++a) for (var r = 0; r < e[a]; ++r) t.push(a);
	for (var n = new Array, i = 0; 10 > i; ++i) {
		n.push(new Array);
		for (var o = 0; 10 > o; ++o) n[n.length - 1].push(-1)
	}
	vout("picklist"), vout(t), VUtils.setRandomSeed(1);
	for (var l = 222, o = 0; 10 > o; ++o) for (var i = 0; 10 > i; ++i) {
		for (var s;;) {
			var c = l;
			for (vout("beforebeforebeforebeforebeforebeforebefore"); c-- > 0 && (s = t[Math.floor(100 * VUtils.getRandom())], vout("1tileNum=" + s), n[(i + 10 - 1) % 10][o] == s || n[(i + 1) % 10][o] == s || n[i][(o + 10 - 1) % 10] == s || n[i][(o + 1) % 10] == s););
			0 == l && vout("qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty");
			break
		}
		n[i][o] = s
	}
	for (var u = "", o = 0; 10 > o; ++o) {
		for (var i = 0; 10 > i; ++i) u += n[i][o];
		u += "\n"
	}
	vout("----------"), vout(u), vout("----------");
	for (var a = 0; a < e.length; ++a) {
		for (var d = 0, o = 0; 10 > o; ++o) for (var i = 0; 10 > i; ++i) n[i][o] == a && ++d;
		vout("tileNum " + a + " qty=" + d)
	}
	return n
}
function TTGUI(e, t, a) {
	function r(e) {
		vout("***CLICK"), xt || ($(".modal-decorate-options").fadeOut(), tt.decorateOptionAction(e))
	}
	function n() {
		$(".modal-styles-overlay").fadeOut()
	}
	function i(e) {
		var t = $("." + e).position().top;
		$(".vit-pane-container .vit-content-pane").scrollTop(t)
	}
	function o(e) {
		if (null != e) {
			lt = e;
			var t = e.data("entry-index");
			st = Ze()[t];
			var a = e.offset().left + .75 * e.width();
			a + 1.1 * $(".select-tile-modal").width() > $(window).width() && (a = $(window).width() - 1.1 * $(".select-tile-modal").width());
			var r = e.offset().top + .75 * e.height();
			r + 1.1 * $(".select-tile-modal").height() > $(window).height() && (r = $(window).height() - 1.1 * $(".select-tile-modal").height()), a = 240 + (671 - $(".select-tile-modal").width()) / 2, r = e.offset().top + e.height() / 2 > $(window).height() / 2 ? 25 : $(window).height() - $(".select-tile-modal").height() - 25, VUtils.isTabletOrPhoneDevice() ? ($(".select-tile-modal").css("left", a + "px"), $(".select-tile-modal").css("top", r + "px")) : ($(".select-tile-modal").stop(), dt ? (dt = !1, $(".select-tile-modal").css("left", a + "px"), $(".select-tile-modal").css("top", r + "px")) : $(".select-tile-modal").animate({
				left: a + "px",
				top: r + "px"
			}, 100), $(".select-tile").hide(), $(".select-tile-modal .small-text").css("font-size", "13px"), $(".select-tile-modal .price").css("font-size", "16px")), $(".select-tile-modal .vit-thumbnail").attr("src", st.thumbnail), $(".select-tile-modal p").eq(0).html(st.nameText), $(".select-tile-modal p").eq(1).html("Code: " + st.skuText), $(".select-tile-modal p").eq(2).html(st.sizeText), $(".select-tile-modal p").eq(3).find("strong").html(st.priceText), $(".select-tile-modal p").eq(3).find("span").html(st.priceText2), $(".select-tile-modal").show(), "" != st.priceM2Text ? ($(".select-tile-modal p").eq(4).find("strong").html(st.priceM2Text), $(".select-tile-modal .price").eq(1).show()) : $(".select-tile-modal .price").eq(1).hide()
		} else $(".select-tile-modal").hide()
	}
	function l() {
		$(".modal-startup-overlay").fadeOut()
	}
	function s() {
		z(st.selectIdSelectTile), o(null)
	}
	function c() {
		o(null)
	}
	function u() {
		Rt = !1, Ie(), o(null)
	}
	function d() {
		Rt && tt.selection($t.selectIdApplyFilters), De()
	}
	function h(e) {
		tt.selection($t.tilesSearch.selectIdSearch, e, function() {
			De()
		})
	}
	function p() {
		tt.selection($t.basket.selectIdPay)
	}
	function g(e, t) {
		var a = tt.selection(e, t);
		Fe(a)
	}
	function f(e, t) {
		var a = tt.selection(e, t);
		Ye(a)
	}
	function m(e) {
		tt.selection($t.addToBasketPopup.selectIdUpdateQuantity, e), Le()
	}
	function v(e) {
		tt.selection($t.addToBasketPopup.selectIdUpdateCoverage, e), We()
	}
	function b(e, t) {
		$t.addRangeToBasketPopup.items[t].disable || (tt.selection(e), Ee(), We(), Le())
	}
	function T(e, t) {
		tt.selection(e, t), Le()
	}
	function k(e, t) {
		tt.selection(e, t), We()
	}
	function w(e, t) {
		$t.addSampleTileRangePopup.items[t].disable || (tt.selection(e), He())
	}
	function y() {
		tt.selection($t.tilingAsRangeOrSinglePopup.selectIdAbort), Xe(!1)
	}
	function S() {
		tt.selection($t.tilingAsRangeOrSinglePopup.selectIdSingle), Xe(!1), je()
	}
	function x() {
		Xe(!1), Ue(!0)
	}
	function R(e) {
		tt.selection(e), Ve(!0, null)
	}
	function A(e, t) {
		var a = tt.selection(e, t);
		Ve(!1, a)
	}
	function C(e) {
		$(".modal-tiling-range .basket-btn a").hasClass("range-add-basket-disabled") || (tt.selection($t.tilingAsRangePopup.selectIdFinished), Ue(!1), je())
	}
	function P() {
		tt.selection($t.tilingAsRangePopup.selectIdAbort), Ue(!1)
	}
	function D() {
		switch (rt) {
		case -1:
		case 0:
			rt = 1;
			break;
		case -2:
		case 1:
		case 2:
			rt = 0;
			break;
		case 3:
			rt = 2, it = -1, Ae()
		}
		M()
	}
	function I() {
		switch (rt) {
		case -1:
		case 0:
			rt = 1, M();
			break;
		case 3:
			rt = 2, M(), it = -1, Ae()
		}
	}
	function O() {
		switch (rt) {
		case -1:
		case 0:
			break;
		case 1:
		case 2:
			rt = 0, M();
			break;
		case 3:
			rt = 0, M()
		}
	}
	function M(e) {
		if (void 0 == e) return void setTimeout(function() {
			M(0)
		}, 1);
		var t = $(".vl-main-nav").width(),
			a = $(".vl-pane").width();
		switch (vout("updateMainPaneOpenState(): " + rt), rt) {
		case -2:
			$(".vl-main-nav").css("left", "0px"), $(".vl-pane").css("left", "-" + a + "px"), $(".vit-pane-tab").css("left", "-" + a + "px");
			break;
		case -1:
			$(".vl-main-nav").css("left", "-" + t + "px"), $(".vl-pane").css("left", "-" + (a + t) + "px"), $(".vit-pane-tab").css("left", "-" + (a + t) + "px"), $(".vit-pane-tab").attr("src", "images/vit_main_menu_tab_right.png");
			break;
		case 0:
			$(".vl-main-nav").animate({
				left: "-" + t + "px"
			}, 500), $(".vl-pane").animate({
				left: "-" + (a + t) + "px"
			}, 500), $(".vit-pane-tab").animate({
				left: "-" + (a + t) + "px"
			}, 500, function() {
				$(".vit-pane-tab").attr("src", "images/vit_main_menu_tab_right.png")
			});
			break;
		case 1:
			$(".vl-main-nav").animate({
				left: "0px"
			}, 500), $(".vl-pane").animate({
				left: "-" + a + "px"
			}, 500), $(".vit-pane-tab").animate({
				left: "-" + a + "px"
			}, 500, function() {
				$(".vit-pane-tab").attr("src", "images/vit_main_menu_tab_left.png")
			});
			break;
		case 2:
			$(".vl-pane").animate({
				left: "-" + a + "px"
			}, 500), $(".vit-pane-tab").animate({
				left: "-" + a + "px"
			}, 500), $(".vit-pane-tab").attr("src", "images/vit_main_menu_tab_left.png");
			break;
		case 3:
			$(".vl-pane").animate({
				left: "0"
			}, 500), $(".vit-pane").animate({
				left: "0"
			}, 500), $(".vit-pane-tab").animate({
				left: "0"
			}, 500)
		}
	}
	function B() {
		switch (nt) {
		case -1:
		case 0:
			nt = 1;
			break;
		case 1:
			nt = 2;
			break;
		case 2:
			nt = 0
		}
		G()
	}
	function Y() {
		nt = 0, G()
	}
	function F() {
		nt = 1, G()
	}
	function G() {
		var e = $(".tools-container").width(),
			t = $(".tool-container").width() + 6;
		switch (nt) {
		case -1:
			$(".tools-container").css("right", -e + "px"), $(".vit-tools-tab").css("right", "0");
			break;
		case 0:
			$(".tools-container").animate({
				right: -e + "px"
			}, 300), $(".vit-tools-tab").animate({
				right: "0"
			}, 300, function() {
				$(".vit-tools-tab").attr("src", "images/vit_tool_tab_left.png")
			});
			break;
		case 1:
			$(".tools-container").animate({
				right: -t + "px"
			}, 300), $(".vit-tools-tab").animate({
				right: e - t + "px"
			}, 300, function() {
				$(".vit-tools-tab").attr("src", "images/vit_tool_tab_left.png")
			});
			break;
		case 2:
			$(".tools-container").animate({
				right: "0"
			}, 300), $(".vit-tools-tab").animate({
				right: e + "px"
			}, 300, function() {
				$(".vit-tools-tab").attr("src", "images/vit_tool_tab_right.png")
			})
		}
	}
	function E() {
		$(".style-tile-modal").hide(), 0 == it ? (it = -1, rt = 2, M()) : (it = 0, rt = 3, M(), Y()), Ae(), VUtils.isTabletOrPhoneDevice() ? ($(".vit-scrollbar1").show(), $(".vit-scrollbar2").hide()) : ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide())
	}
	function W() {
		1 == it ? (it = -1, rt = 2, M()) : (it = 1, rt = 3, M(), Y()), Ae(), VUtils.isTabletOrPhoneDevice() ? ($(".vit-scrollbar1").show(), $(".vit-scrollbar2").hide()) : ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide())
	}
	function L() {
		$(".style-tile-modal").hide(), 3 == it ? (it = -1, rt = 2, M()) : (it = 3, rt = 3, M(), Y()), Ae(), VUtils.isTabletOrPhoneDevice() ? ($(".vit-scrollbar1").show(), $(".vit-scrollbar2").hide()) : ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide())
	}
	function q() {
		3 == it ? (it = -1, rt = 2, M()) : (it = 3, rt = 3, M(), Y(), tt.selection($t.wishlist.selectIdRefreshWishlist)), Ae(), VUtils.isTabletOrPhoneDevice() ? ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").show()) : ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide())
	}
	function H() {
		4 == it ? (it = -1, rt = 2, M()) : (it = 4, rt = 3, M(), Y(), tt.selection($t.basket.selectIdRefreshBasket)), Ae(), Me(), VUtils.isTabletOrPhoneDevice() ? ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").show()) : ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide())
	}
	function X() {
		$(".style-tile-modal").hide(), 5 == it ? (it = -1, rt = 2, M()) : (it = 5, rt = 3, M(), Y()), Ae(), Be(), VUtils.isTabletOrPhoneDevice() ? ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").show()) : ($(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide())
	}
	function U(e) {
		tt.selection(e), Ae()
	}
	function V(e) {
		tt.selection(e), Ae()
	}
	function N(e) {
		"" != e && (it = -1, -1 != e.indexOf("SelectPredecoratedRoom") ? O() : VUtils.isTabletOrPhoneDevice() ? O() : I(), Ae(), tt.selection(e), je())
	}
	function j(e) {
		"" != e && (tt.selection(e), Ce(!1))
	}
	function Z(e) {
		tt.selection($t.tilesType.selectIdTilesType, e), ot = e, Ae()
	}
	function _() {
		tt.selection($t.tools.selectIdCreateArea), it = -1, O(), Ae()
	}
	function z(e) {
		"" != e && (o(null), it = -1, VUtils.isTabletOrPhoneDevice() ? O() : I(), F(), Ae(), tt.selection(e) && Xe(!0), je())
	}
	function Q(e) {
		"" != e && (Rt = !0, tt.selection(e), Ie())
	}
	function K(e) {
		"" != e && (tt.selection(e), De())
	}
	function J(e) {
		tt.selection(e), Oe(), Ae(), je()
	}
	function ee(e) {
		tt.selection(e), Ge(!0), $(".modal-basket").fadeIn()
	}
	function te(e) {
		tt.selection(e), Me(), Ae()
	}
	function ae(e) {
		tt.selection(e), Me(), Ae()
	}
	function re() {
		if (!$(".tool").eq(0).hasClass("disabled")) {
			if (tt.selection($t.tools.selectIdOrderSample)) return void qe(!0);
			je(), Ae()
		}
	}
	function ne() {
		$(".tool").eq(1).hasClass("disabled") || (tt.selection($t.tools.selectIdAddTileToBasketStart), Ge(!0))
	}
	function ie() {
		tt.selection($t.addToBasketPopup.selectIdAddTileToBasket) && (Ge(!1), je(), Ae())
	}
	function oe() {
		$(".modal-popup .range-basket .basket-btn a").hasClass("range-add-basket-disabled") || tt.selection($t.addRangeToBasketPopup.selectIdAddTileRangeToBasket) && (Ge(!1), je(), Ae())
	}
	function le() {
		$(".modal-range-samples .basket-btn a").hasClass("range-add-basket-disabled") || (tt.selection($t.addSampleTileRangePopup.selectIdAddSampleTileRangeToBasket), qe(!1), je(), Ae())
	}
	function se() {
		Ge(!1), je(), Ae()
	}
	function ce() {
		qe(!1), je(), Ae()
	}
	function ue(e) {
		tt.selection($t.tools.selectIdChangePattern, St[e]), $(".modal-pattern").fadeOut(), je()
	}
	function de() {
		$(".modal-pattern").fadeOut()
	}
	function he() {
		$(".modal-share").fadeOut()
	}
	function pe(e) {
		return "Email" == e ? ($(".modal-share").fadeOut(), $(".modal-email").fadeIn(), void(-1 != location.href.indexOf("localhost") && ($(".modal-email input").eq(0).val("Chris Chapman"), $(".modal-email input").eq(1).val("cjc@chrischapman.co.uk"), $(".modal-email textarea").val("hello")))) : ($(".modal-share .icons").hide(), $(".modal-share .exporting").show(), void tt.selection($t.tools.selectIdPrepareShareRoom, e, function() {
			$(".modal-share .exporting").hide(), $(".modal-share .share-it").show()
		}))
	}
	function ge() {
		$(".modal-share").fadeOut(), tt.selection($t.tools.selectIdShareRoom)
	}
	function fe() {
		$(".modal-email").fadeOut()
	}
	function me() {
		$(".modal-email").fadeOut();
		var e = $(".modal-email input").eq(0).val(),
			t = $(".modal-email input").eq(1).val(),
			a = $(".modal-email textarea").val();
		tt.selection($t.tools.selectIdEmailRoom, e, t, a)
	}
	function ve() {
		$(".tool").eq(2).hasClass("disabled") || (tt.selection($t.tools.selectIdUndoChanges), je())
	}
	function be() {
		$(".tool").eq(3).hasClass("disabled") || (tt.selection($t.tools.selectIdRedoChanges), je())
	}
	function Te() {
		$(".tool").eq(4).hasClass("disabled") || (tt.selection($t.tools.selectIdClearAllChanges), je())
	}
	function ke() {
		$(".tool").eq(5).hasClass("disabled") || (tt.selection($t.tools.selectIdSaveRoom), je())
	}
	function we() {
		$(".tool").eq(6).hasClass("disabled") || (tt.selection($t.tools.selectIdProductDetails), je(), Ae())
	}
	function ye() {
		$(".tool").eq(7).hasClass("disabled") || (tt.selection($t.tools.selectIdRotateProduct), je())
	}
	function $e() {
		$(".tool").eq(8).hasClass("disabled") || ($(".tool").eq(8).hasClass("selected") ? (tt.selection($t.tools.selectIdChangePattern, null), je()) : (Ne(), $(".modal-pattern").fadeIn()))
	}
	function Se() {
		$(".tool").eq(9).hasClass("disabled") || (tt.selection($t.tools.selectIdSingleTile), je())
	}
	function xe() {
		$(".tool").eq(10).hasClass("disabled") || ($(".modal-share .icons").show(), $(".modal-share .exporting").hide(), $(".modal-share .share-it").hide(), $(".modal-share").fadeIn())
	}
	function Re() {
		$(".tool").eq(11).hasClass("disabled") || tt.selection($t.tools.selectIdPrintRoom)
	}
	function Ae() {}
	function Ce(e) {
		$(".vit-content-tiles").hide(), $(".vit-content-filters").hide(), $(".vit-content-wishlist").hide(), $(".vit-content-basket").hide(), $(".vit-content-help").hide();
		var t = $t.rooms;
		if (e && (t = $t.predecoratedRooms), $t.isSavedRooms && 0 == t.length) return $(".vit-content-rooms .rooms-empty").show(), $(".rooms-list").html(""), void $(".vit-content-rooms").show();
		$(".vit-content-rooms .rooms-empty").hide(), $(".vit-commercial-rooms-sub-heading").hide(), e || "Commercial Space" != $t.roomType || $(".vit-commercial-rooms-sub-heading").show(), e ? ($(".vit-content-rooms p").eq(0).hide(), $(".vit-content-rooms p").eq(1).hide(), $(".vit-content-rooms p").eq(2).show()) : $t.isSavedRooms ? ($(".vit-content-rooms p").eq(0).hide(), $(".vit-content-rooms p").eq(1).show(), $(".vit-content-rooms p").eq(2).hide()) : ($(".vit-content-rooms p").eq(0).show(), $(".vit-content-rooms p").eq(1).hide(), $(".vit-content-rooms p").eq(2).hide());
		for (var a = "", r = 0; r < t.length; ++r) {
			var n = t[r],
				i = bt;
			i = i.replace("images/placeholder/thumbnails/rooms/Room1.jpg", n.thumbnail), i = i.replace("SELECT-ID-ROOM", n.selectIdSelectRoom), n.savedRoom ? (i = i.replace("SELECT-ID-DELETE", n.selectIdDeleteRoom), i = i.replace("HIDE-DELETE", "")) : i = i.replace("HIDE-DELETE", "hide");
			var o = "";
			n.selected && (o = " selected"), n.disabled && (o += " disabled"), i = i.replace("ROOM-STYLE", o), a += i
		}
		$(".rooms-list").html(a), $(".vit-content-rooms").show(), $(".vit-room").click(function() {
			N($(this).data("select-id"))
		}), $(".vit-room-container button.close").click(function() {
			j($(this).data("select-id"))
		})
	}
	function Pe() {
		ut += ct, De()
	}
	function De() {
		function e() {
			vout("unveilTileThumbnailsAsNecessary()");
			var e = 0,
				t = $(".vit-pane-container .vit-content-pane").scrollTop(),
				a = t + $(".vit-pane-container .vit-content-pane").height();
			$(".vit-pane-container .vit-content-pane img.vit-tile").each(function() {
				var e = t + $(this).parent().position().top,
					r = e + $(this).height();
				a > e && r > t && $(this).attr("src") != $(this).data("thumbnail-src") && $(this).attr("src", $(this).data("thumbnail-src"))
			})
		}
		var t = "";
		if (("Tiles" == ot || "Mosaics" == ot || "Natural Stone" == ot) && 0 != $t.currentFilters.length) {
			for (var a = 0; a < $t.currentFilters.length; ++a) {
				var r = Tt.replace("CURRENT-FILTER-LABEL", $t.currentFilters[a].filterValueText);
				r = r.replace("SELECT-CURRENT-FILTER", $t.currentFilters[a].selectIdDeleteFilter), t += r
			}
			t += "<br><br>"
		}
		$(".current-filters").html(t), $(".vit-content-rooms").hide(), $(".vit-content-filters").hide(), $(".vit-content-wishlist").hide(), $(".vit-content-basket").hide(), $(".vit-content-help").hide();
		var n = Ze(),
			i = !1;
		("Paint" == ot || "Cabinets" == ot || "Worktops" == ot) && (i = !0);
		for (var t = "", a = 0; a < n.length; ++a) {
			var l = n[a];
			t += '<div class="vl-tile">';
			var s = "";
			if (l.selected && (s = " selected"), l.disabled && (s += " disabled"), t += i ? '<div title="' + l.name + '"class="vit-grout' + s + '" style="background-color: #' + l.colour + '" data-select-id="' + l.selectIdSelectColour + '"><div class="vit-grout2"></div></div>' : "Grout" == ot ? '<div title="' + l.name + '"class="vit-grout' + s + '" style="background-color: #' + l.colour + '" data-select-id="' + l.selectIdSelectGrout + '"><div class="vit-grout2"></div></div>' : '<img class="vit-tile' + s + '" data-entry-index="' + a + '" data-select-id="' + l.selectIdSelectTile + '" src="' + l.thumbnail + '">', t += "</div>", a + 1 >= ut) break
		}
		switch ($(".tiles-list").html(t), ut < n.length ? $(".vit-show-more").show() : $(".vit-show-more").hide(), unveilTilesTimeout = setTimeout(e, 1), $(".vit-content-tiles .heading").hide(), ot) {
		default:
		case "Tiles":
		case "Mosaics":
		case "Natural Stone":
			$(".vit-content-tiles .heading.tile").show(), $(".vit-search").show();
			break;
		case "Borders":
			$(".vit-content-tiles .heading.borders").show(), $(".vit-search").hide();
			break;
		case "Wood Flooring":
			$(".vit-content-tiles .heading.wood").show(), $(".vit-search").hide();
			break;
		case "Grout":
			$(".vit-content-tiles .heading.grout").show(), $(".vit-search").hide();
			break;
		case "Paint":
			$(".vit-content-tiles .heading.paint-colour").show(), $(".vit-search").hide();
			break;
		case "Cabinets":
			$(".vit-content-tiles .heading.cabinet-colour").show(), $(".vit-search").hide();
			break;
		case "Worktops":
			$(".vit-content-tiles .heading.worktop-colour").show(), $(".vit-search").hide()
		}
		$(".vit-content-tiles").show(), VUtils.isTabletOrPhoneDevice() ? $(".vit-tile").click(function() {
			o($(this))
		}) : ($(".vit-tile").click(function() {
			z($(this).data("select-id"))
		}), $(".vit-tile").on("mouseenter", function() {
			o($(this))
		})), $(".vit-grout").click(function() {
			z($(this).data("select-id"))
		}), $(".current-filters button").click(function() {
			K($(this).data("select-id"))
		})
	}
	function Ie() {
		$(".vit-content-rooms").hide(), $(".vit-content-tiles").hide(), $(".vit-content-wishlist").hide(), $(".vit-content-basket").hide(), $(".vit-content-help").hide();
		for (var e = "", t = 0; t < $t.filters.length; ++t) {
			var a = $t.filters[t];
			e += '<div class="vit-filter-set vl-filter-set">', e += '<p class="vl-filter-set-heading"><strong>' + a.titleText + "</strong></p>";
			for (var r = 0; r < a.items.length; ++r) {
				var n = a.items[r].buttonSizeClass,
					i = "";
				"Disabled" == a.items[r].state ? i = "disabled" : "Selected" == a.items[r].state && (i = "selected"), e += '<div class="' + n + '">', e += '<button class="' + i + '" data-select-id="' + a.items[r].selectIdFilter + '">' + a.items[r].filterValueText + "</button>", e += "</div>"
			}
			e += '<div class="vl-filter-set-line"><p class="vit-filter-set-divider"></p></div>', e += "</div>"
		}
		$(".vit-filter-sets").html(e), "Tiles" == ot ? ($(".vit-filters-desc-long").show(), $(".vit-filters-desc-short").hide()) : ($(".vit-filters-desc-long").hide(), $(".vit-filters-desc-short").show()), $(".vit-content-filters").show(), $(".vit-filter-sets button").click(function() {
			Q($(this).data("select-id"))
		})
	}
	function Oe() {
		return;
		if ($(".vit-content-rooms").hide(), $(".vit-content-tiles").hide(), $(".vit-content-filters").hide(), $(".vit-content-basket").hide(), $(".vit-content-help").hide(), 0 == $t.wishlist.length) return $(".vit-content-wishlist .wishlist-empty").show(), $(".wishlist-list").html(""), void $(".vit-content-wishlist").show();
		$(".vit-content-wishlist .wishlist-empty").hide();
		for (var e = "", t = 0; t < $t.wishlist.length; ++t) {
			var a = $t.wishlist[t],
				r = mt.replace("images/placeholder/thumbnails/tiles/811639.jpg", a.thumbnail);
			r = r.replace("Tile Name", a.nameText), r = r.replace("123456", a.codeText), r = r.replace("£123.45", a.priceText), r = r.replace("price/box", a.priceText2), r = r.replace("SELECT-ID-CLOSE", a.selectIdDeleteFromWishlist), r = r.replace("SELECT-ID-ADD-TO-BASKET", a.selectIdAddTileToBasketStart), e += r
		}
		$(".wishlist-list").html(e), $(".vit-content-wishlist").show(), $(".vit-content-wishlist .close").click(function() {
			J($(this).data("select-id"))
		}), $(".vit-content-wishlist .add-to-basket button").click(function() {
			ee($(this).data("select-id"))
		})
	}
	function Me() {
		if ($(".vit-content-rooms").hide(), $(".vit-content-tiles").hide(), $(".vit-content-filters").hide(), $(".vit-content-wishlist").hide(), $(".vit-content-help").hide(), 0 == $t.basket.items.length) return $(".vit-content-basket .basket-empty").show(), $(".table-heading").hide(), $(".basket-items-container").hide(), $(".grand-total").hide(), $(".vit-content-basket").show(), void $(".vit-content-basket .pay").hide();
		$(".vit-content-basket .pay").show(), $(".vit-content-basket .basket-empty").hide(), $(".basket-items-container").show(), $(".pay").show(), $(".table-heading").show(), $(".basket-items-container").show(), $(".grand-total").show();
		for (var e = "", t = 0; t < $t.basket.items.length; ++t) {
			var a = $t.basket.items[t],
				r = vt.replace("images/placeholder/thumbnails/tiles/811639.jpg", a.thumbnail);
			a.isSample || (r = r.replace("Sample Tile", "")), r = r.replace("Tile Name", a.nameText), r = r.replace("123456", a.codeText), r = r.replace("[111]", a.quantityText), "" != a.coverageText ? r = r.replace("[222]", a.coverageText) : (r = r.replace("show", "hide"), r = r.replace("show", "hide")), r = r.replace("88.88", a.itemPriceText), r = r.replace("99.99", a.totalPriceText), r = r.replace("SELECT-ID-CLOSE", a.selectIdDeleteFromBasket), r = r.replace("SELECT-ID-REFRESH", a.selectIdRefresh), r = r.replace("SELECT-ID-QUANTITY", a.selectIdUpdateQuantity), r = r.replace("SELECT-ID-COVERAGE", a.selectIdUpdateCoverage), e += r
		}
		$(".basket-items-container").html(e), $(".vit-content-basket").show(), $(".grand-total-price").html($t.basket.grandTotalText), $(".vit-content-basket .close").click(function() {
			ae($(this).data("select-id"))
		}), $(".vit-content-basket .refresh").click(function() {
			te($(this).data("select-id"))
		}), $(".vit-content-basket input.quantity").keyup(function() {
			g($(this).data("select-id"), $(this).val())
		}), $(".vit-content-basket input.coverage").keyup(function() {
			f($(this).data("select-id"), $(this).val())
		})
	}
	function Be() {
		$(".vit-content-rooms").hide(), $(".vit-content-tiles").hide(), $(".vit-content-filters").hide(), $(".vit-content-basket").hide(), $(".vit-content-wishlist").hide(), $(".vit-content-help").show()
	}
	function Ye(e) {
		$(".vit-content-basket input.quantity").eq(e).val($t.basket.items[e].quantityText), $(".vit-content-basket .item-price").eq(e).html($t.basket.items[e].itemPriceText), $(".vit-content-basket .total-price").eq(e).html($t.basket.items[e].totalPriceText), $(".grand-total-price").html($t.basket.grandTotalText)
	}
	function Fe(e) {
		$(".vit-content-basket input.coverage").eq(e).val($t.basket.items[e].coverageText), $(".vit-content-basket .item-price").eq(e).html($t.basket.items[e].itemPriceText), $(".vit-content-basket .total-price").eq(e).html($t.basket.items[e].totalPriceText), $(".grand-total-price").html($t.basket.grandTotalText)
	}
	function Ge(e) {
		if (null != $t.addRangeToBasketPopup) {
			if (!e) return void $(".modal-range-basket").fadeOut();
			for (var t = "", a = 0; a < $t.addRangeToBasketPopup.items.length; ++a) {
				var r = kt.replace("Tile Name", $t.addRangeToBasketPopup.items[a].nameText);
				r = r.replace("images/placeholder/thumbnails/tiles/811639.jpg", $t.addRangeToBasketPopup.items[a].thumbnailURL), r = r.replace("SELECT-ID-ENABLE", $t.addRangeToBasketPopup.items[a].selectIdEnable), r = r.replace("LIST-INDEX", a), r = r.replace("SELECT-ID-QUANTITY", $t.addRangeToBasketPopup.items[a].selectIdUpdateQuantity), r = r.replace("SELECT-ID-COVERAGE", $t.addRangeToBasketPopup.items[a].selectIdUpdateCoverage), t += r
			}
			$(".vit-tile-range-list").html(t), $(".modal-range-basket .vit-tile-range-tick").click(function() {
				b($(this).data("select-id"), $(this).data("list-index"))
			}), $(".vit-tile-range-quantity input").keyup(function() {
				T($(this).data("select-id"), $(this).val())
			}), $(".vit-tile-range-coverage input").keyup(function() {
				k($(this).data("select-id"), $(this).val())
			}), Ee(), We(), Le(), $(".modal-range-basket").fadeIn(), setTimeout(function() {
				$(".vit-tile-range-list").scrollTop(0)
			}, 1)
		} else {
			if (!e) return void $(".modal-basket").fadeOut();
			We(), Le(), $(".modal-basket").fadeIn()
		}
	}
	function Ee() {
		for (var e = !1, t = 0; t < $t.addRangeToBasketPopup.items.length; ++t) if ($t.addRangeToBasketPopup.items[t].enable ? (e = !0, $(".modal-range-basket .vit-tile-range-tick").eq(t).attr("src", "images/checkbox_active.png")) : $(".modal-range-basket .vit-tile-range-tick").eq(t).attr("src", "images/checkbox_inactive.png"), $t.addRangeToBasketPopup.items[t].disable) {
			$(".modal-range-basket .range-basket-margins").eq(t).addClass("range-disabled"), $(".modal-range-basket .vit-tile-range-tick").eq(t).addClass("range-tick-disabled");
			for (var a = 0; 5 > a; ++a) $(".modal-range-basket .tile-range-not-in-basket").eq(5 * t + a).hide();
			$(".modal-range-basket .tile-range-is-in-basket").eq(t).show()
		} else {
			$(".modal-range-basket .range-basket-margins").eq(t).removeClass("range-disabled"), $(".modal-range-basket .vit-tile-range-tick").eq(t).removeClass("range-tick-disabled");
			for (var a = 0; 5 > a; ++a) $(".modal-range-basket .tile-range-not-in-basket").eq(5 * t + a).show();
			$(".modal-range-basket .tile-range-is-in-basket").eq(t).hide()
		}
		e ? $(".modal-popup .range-basket .basket-btn a").removeClass("range-add-basket-disabled") : $(".modal-popup .range-basket .basket-btn a").addClass("range-add-basket-disabled")
	}
	function We() {
		if (null != $t.addRangeToBasketPopup) for (var e = 0; e < $t.addRangeToBasketPopup.items.length; ++e) $(".modal-popup .range-basket input").eq(2 * e + 0).val($t.addRangeToBasketPopup.items[e].quantity), $(".modal-popup .range-basket .tile-range-price").eq(e).html($t.addRangeToBasketPopup.items[e].price), $t.addRangeToBasketPopup.items[e].enable ? ($(".modal-popup .range-basket input").eq(2 * e + 0).prop("disabled", !1), $(".modal-popup .range-basket input").eq(2 * e + 0).removeClass("range-basket-disabled"), $(".modal-popup .range-basket .tile-range-price").eq(e).removeClass("range-basket-disabled")) : ($(".modal-popup .range-basket input").eq(2 * e + 0).prop("disabled", !0), $(".modal-popup .range-basket input").eq(2 * e + 0).addClass("range-basket-disabled"), $(".modal-popup .range-basket .tile-range-price").eq(e).addClass("range-basket-disabled"));
		else $(".modal-popup .basket input").eq(0).val($t.addToBasketPopup.quantity), $(".modal-popup .basket .normal-text strong").eq(1).html($t.addToBasketPopup.price)
	}
	function Le() {
		if (null != $t.addRangeToBasketPopup) for (var e = 0; e < $t.addRangeToBasketPopup.items.length; ++e) $(".modal-popup .range-basket input").eq(2 * e + 1).val($t.addRangeToBasketPopup.items[e].coverage), $(".modal-popup .range-basket .tile-range-price").eq(e).html($t.addRangeToBasketPopup.items[e].price), $t.addRangeToBasketPopup.items[e].enable ? ($(".modal-popup .range-basket input").eq(2 * e + 1).prop("disabled", !1), $(".modal-popup .range-basket input").eq(2 * e + 1).removeClass("range-basket-disabled"), $(".modal-popup .range-basket .tile-range-price").eq(e).removeClass("range-basket-disabled")) : ($(".modal-popup .range-basket input").eq(2 * e + 1).prop("disabled", !0), $(".modal-popup .range-basket input").eq(2 * e + 1).addClass("range-basket-disabled"), $(".modal-popup .range-basket .tile-range-price").eq(e).addClass("range-basket-disabled"));
		else $(".modal-popup .basket .normal-text strong").eq(1).html($t.addToBasketPopup.price), "" == $t.addToBasketPopup.coverage ? ($(".no-metres-sq").show(), $(".basket-centre-or").hide(), $(".metres-sq").hide()) : ($(".modal-popup .basket input").eq(1).val($t.addToBasketPopup.coverage), $(".no-metres-sq").hide(), $(".basket-centre-or").show(), $(".metres-sq").show())
	}
	function qe(e) {
		if (!e) return void $(".modal-range-samples").fadeOut();
		for (var t = "", a = 0; a < $t.addSampleTileRangePopup.items.length; ++a) {
			var r = wt.replace("Tile Name", $t.addSampleTileRangePopup.items[a].nameText);
			r = r.replace("images/placeholder/thumbnails/tiles/811639.jpg", $t.addSampleTileRangePopup.items[a].thumbnailURL), r = r.replace("SELECT-ID-ENABLE", $t.addSampleTileRangePopup.items[a].selectIdEnable), r = r.replace("LIST-INDEX", a), r = r.replace("0.00", $t.addSampleTileRangePopup.items[a].price), t += r
		}
		$(".vit-range-samples-list").html(t), $(".modal-range-samples .vit-tile-range-tick").click(function() {
			w($(this).data("select-id"), $(this).data("list-index"))
		}), He(), $(".modal-range-samples").fadeIn(), setTimeout(function() {
			$(".vit-range-samples-list").scrollTop(0)
		}, 1)
	}
	function He() {
		for (var e = !1, t = 0; t < $t.addSampleTileRangePopup.items.length; ++t) $t.addSampleTileRangePopup.items[t].enable ? ($(".modal-range-samples .vit-tile-range-tick").eq(t).attr("src", "images/checkbox_active.png"), e = !0) : $(".modal-range-samples .vit-tile-range-tick").eq(t).attr("src", "images/checkbox_inactive.png"), $t.addSampleTileRangePopup.items[t].disable ? ($(".modal-range-samples .range-samples-margins").eq(t).addClass("range-disabled"), $(".modal-range-samples .vit-tile-range-tick").eq(t).addClass("range-tick-disabled"), $(".modal-range-samples .tile-range-not-in-basket").eq(2 * t + 0).hide(), $(".modal-range-samples .tile-range-not-in-basket").eq(2 * t + 1).hide(), $(".modal-range-samples .tile-range-is-in-basket").eq(t).show(), $t.addSampleTileRangePopup.items[t].cantOrderSample ? $(".modal-range-samples .tile-range-is-in-basket").eq(t).find("p").eq(0).hide() : $(".modal-range-samples .tile-range-is-in-basket").eq(t).find("p").eq(1).hide()) : ($(".modal-range-samples .range-samples-margins").eq(t).removeClass("range-disabled"), $(".modal-range-samples .vit-tile-range-tick").eq(t).removeClass("range-tick-disabled"), $(".modal-range-samples .tile-range-not-in-basket").eq(2 * t + 0).show(), $(".modal-range-samples .tile-range-not-in-basket").eq(2 * t + 1).show(), $(".modal-range-samples .tile-range-is-in-basket").eq(t).hide());
		e ? $(".modal-range-samples .basket-btn a").removeClass("range-add-basket-disabled") : $(".modal-range-samples .basket-btn a").addClass("range-add-basket-disabled")
	}
	function Xe(e) {
		return e ? void $(".modal-tiling-range-or-single").fadeIn() : void $(".modal-tiling-range-or-single").fadeOut()
	}
	function Ue(e) {
		if (!e) return void $(".modal-tiling-range").fadeOut();
		for (var t = "", a = 0; a < $t.tilingAsRangePopup.items.length; ++a) {
			var r = yt.replace("Tile Name", $t.tilingAsRangePopup.items[a].nameText);
			r = r.replace("images/placeholder/thumbnails/tiles/811639.jpg", $t.tilingAsRangePopup.items[a].thumbnailURL), r = r.replace("SELECT-ID-ENABLE", $t.tilingAsRangePopup.items[a].selectIdEnable), r = r.replace("SELECT-ID-PERCENTAGE", $t.tilingAsRangePopup.items[a].selectIdUpdatePercentage), t += r
		}
		$(".vit-tiling-range-list").html(t), $(".modal-tiling-range .vit-tile-range-tick").click(function() {
			R($(this).data("select-id"))
		}), $(".vit-tile-range-percentage input").keyup(function() {
			A($(this).data("select-id"), $(this).val())
		}), Ve(!0, null), $(".modal-tiling-range").fadeIn(), setTimeout(function() {
			$(".vit-tiling-range-list").scrollTop(0)
		}, 1)
	}
	function Ve(e, t) {
		for (var a = !1, r = 0; r < $t.tilingAsRangePopup.items.length; ++r) e && $(".modal-popup .tiling-range input").eq(r).val($t.tilingAsRangePopup.items[r].percentage), $t.tilingAsRangePopup.items[r].enable ? (a = !0, $(".modal-tiling-range .vit-tile-range-tick").eq(r).attr("src", "images/checkbox_active.png"), $(".modal-tiling-range input").eq(r).prop("disabled", !1), $(".modal-tiling-range input").eq(r).removeClass("range-basket-disabled")) : ($(".modal-tiling-range .vit-tile-range-tick").eq(r).attr("src", "images/checkbox_inactive.png"), $(".modal-tiling-range input").eq(r).prop("disabled", !0), $(".modal-tiling-range input").eq(r).addClass("range-basket-disabled"));
		a && null == t ? $(".modal-popup .tiling-range .basket-btn a").removeClass("range-add-basket-disabled") : $(".modal-popup .tiling-range .basket-btn a").addClass("range-add-basket-disabled"), null != t ? ($(".vit-tiling-range-error-message").html(t), $(".vit-tiling-range-error-message").show()) : $(".vit-tiling-range-error-message").hide()
	}
	function Ne() {
		$(".modal-popup .pattern .select-pattern").removeClass("selected");
		for (var e = 0; e < St.length; ++e) $t.tools.currentPattern == St[e] && $(".modal-popup .pattern .select-pattern").eq(e).addClass("selected")
	}
	function je() {
		function e(e, t, a) {
			t ? ($(".tool").eq(e).removeClass("disabled"), $(".tool").eq(e).find("span").removeClass("disabled"), $(".tool").eq(e).find("img").removeClass("disabled")) : ($(".tool").eq(e).addClass("disabled"), $(".tool").eq(e).find("span").addClass("disabled"), $(".tool").eq(e).find("img").addClass("disabled")), void 0 != a && (a ? $(".tool").eq(e).addClass("selected") : $(".tool").eq(e).removeClass("selected"))
		}
		return;
		null != $t.tools.selectedColour ? ($(".current-tile div").css("background-color", "#" + $t.tools.selectedColour), $(".current-tile div").show(), $(".current-tile img").hide()) : ($(".current-tile img").attr("src", $t.tools.selectedTileThumbnail), $(".current-tile img").show(), $(".current-tile div").hide()), e(0, $t.tools.orderSampleEnabled), e(1, $t.tools.addToBasketEnabled), e(2, $t.tools.undoChangesEnabled), e(3, $t.tools.redoChangesEnabled), e(4, $t.tools.clearAllChangesEnabled), e(5, $t.tools.saveRoomEnabled), e(6, $t.tools.productDetailsEnabled), e(7, $t.tools.rotateProductEnabled, $t.tools.rotateProductSelected), e(8, $t.tools.changePatternEnabled, $t.tools.changePatternSelected), e(9, $t.tools.singleTileEnabled, $t.tools.singleTileSelected), e(10, $t.tools.shareRoomEnabled), e(11, $t.tools.printRoomEnabled)
	}
	function Ze() {
		switch (ot) {
		case "Grout":
			return $t.grout;
		case "Paint":
			return $t.wallColours;
		case "Cabinets":
			return $t.cabinetColours;
		case "Worktops":
			return $t.worktopColours;
		default:
			return $t.tiles
		}
	}
	function _e(e) {
		if (null != tt.getCurRoom()) switch (ze(e), vout("GUI - PROCESS EVENT TYPE: " + e.type + " InputX/Y=" + inputX + "," + inputY), e.type) {
		case "touchstart":
			break;
		case "touchmove":
			break;
		case "touchend":
			break;
		case "mousedown":
			break;
		case "mousemove":
			tt.canDecorate(inputX, inputY) ? Qe() : Ke();
			break;
		case "mouseup":
			tt.decorate(inputX, inputY) && je();
			break;
		case "mouseout":
			Ke(), dontHighlightArea = -1
		}
	}
	function ze(e) {
		null != tt.getCurRoom() && ("touchmove" == e.type || "touchstart" == e.type || "touchend" == e.type ? (inputX = e.originalEvent.changedTouches[0].pageX - $(".scene .render").offset().left, inputY = e.originalEvent.changedTouches[0].pageY - $(".scene .render").offset().top) : (inputX = e.pageX - $(".scene .render").offset().left, inputY = e.pageY - $(".scene .render").offset().top), pointerX = inputX, pointerY = inputY, inputX *= tt.getCurRoomWidth() / $(".scene .render").width(), inputY *= tt.getCurRoomHeight() / $(".scene .render").height(), inputX = parseInt(inputX), inputY = parseInt(inputY))
	}
	function Qe() {
		$(".scene .render").css("cursor", "pointer")
	}
	function Ke() {
		$(".scene .render").css("cursor", "default")
	}
	var Je = this,
		et = e,
		tt = t,
		at = a,
		rt = -2,
		nt = -1; - 1 != location.href.indexOf("localhost") && (nt = 2);
	var it = -1,
		ot = "Tiles",
		lt = null,
		st = null,
		ct = 128,
		ut = ct,
		dt = !0,
		ht = null,
		pt = !1;
	$(".vit-pane-tab").click(function() {
		D()
	}), $("img.vit-tools-tab").click(function() {
		B()
	}), $(".current-tile").click(function() {
		B()
	}), $(".menu-items .menu-item").eq(0).click(function() {
		E()
	}), $(".menu-items .menu-item").eq(1).click(function() {
		W()
	}), $(".menu-items .menu-item").eq(2).click(function() {
		_()
	}), $(".menu-items .menu-item").eq(3).click(function() {
		L()
	}), $(".menu-items .menu-item").eq(4).click(function() {
		H()
	}), $(".menu-items .menu-item").eq(5).click(function() {
		X()
	}), $(".vit-search a").click(function() {
		u()
	}), $(".vit-search input").keyup(function() {
		h($(this).val())
	}), $(".vit-apply-filters a").click(function() {
		d()
	}), $(".select-tile-modal .close").click(function() {
		c()
	}), $(".select-tile-modal .select-tile").click(function() {
		s()
	}), $(".modal-popup .basket .basket-btn").click(function() {
		ie()
	}), $(".modal-popup .basket .close").click(function() {
		se()
	}), $(".modal-popup .basket input").eq(0).keyup(function() {
		m($(this).val())
	}), $(".modal-popup .basket input").eq(1).keyup(function() {
		v($(this).val())
	}), $(".modal-popup .pattern .close").click(function() {
		de()
	}), $(".modal-popup .pattern .select-pattern").eq(0).click(function() {
		ue(0)
	}), $(".modal-popup .pattern .select-pattern").eq(1).click(function() {
		ue(1)
	}), $(".modal-popup .pattern .select-pattern").eq(2).click(function() {
		ue(2)
	}), $(".modal-popup .pattern .select-pattern").eq(3).click(function() {
		ue(3)
	}), $(".modal-popup .pattern .select-pattern").eq(4).click(function() {
		ue(4)
	}), $(".modal-popup .pattern .select-pattern").eq(5).click(function() {
		ue(5)
	}), $(".modal-popup .share .icons img").eq(0).click(function() {
		pe("Facebook")
	}), $(".modal-popup .share .icons img").eq(1).click(function() {
		pe("Twitter")
	}), $(".modal-popup .share .icons img").eq(2).click(function() {
		pe("Pinterest")
	}), $(".modal-popup .share .icons img").eq(3).click(function() {
		pe("Email")
	}), $(".modal-popup .share .close").click(function() {
		he()
	}), $(".modal-share .share-it").click(function() {
		ge()
	}), $(".modal-popup .email .close").click(function() {
		fe()
	}), $(".modal-email .email-btn").click(function() {
		me()
	}), $(".vit-show-more button").click(function() {
		Pe()
	}), $(".vit-content-basket .pay").click(function() {
		p()
	}), $(".vit-content-help .section-jump").click(function() {
		i($(this).data("section-pos"))
	}), $(".modal-startup-overlay button.close").click(function() {
		l()
	}), $(".modal-popup .range-basket .basket-btn").click(function() {
		oe()
	}), $(".modal-popup .range-basket .close").click(function() {
		se()
	}), $(".modal-range-samples .basket-btn").click(function() {
		le()
	}), $(".modal-range-samples .close").click(function() {
		ce()
	}), $(".modal-tiling-range .basket-btn").click(function() {
		C()
	}), $(".modal-tiling-range .close").click(function() {
		P()
	}), $(".modal-tiling-range-or-single .close").click(function() {
		y()
	}), $(".modal-tiling-range-or-single .basket-btn").eq(0).click(function() {
		S()
	}), $(".modal-tiling-range-or-single .basket-btn").eq(1).click(function() {
		x()
	}), $(".modal-decorate-options .close").click(function() {
		r("Close")
	}), $(".decorate-grout-border").click(function() {
		r("GroutBorder")
	}), $(".decorate-change-border").click(function() {
		r("ChangeBorder")
	}), $(".decorate-edit-border").click(function() {
		r("EditBorder")
	}), $(".decorate-delete-border").click(function() {
		r("DeleteBorder")
	}), $(".decorate-delete-single-tile").click(function() {
		r("DeleteSingleTile")
	}), $(".decorate-change-single-tile").click(function() {
		r("ChangeSingleTile")
	}), $(".decorate-move-single-tile").click(function() {
		r("MoveSingleTile")
	}), $(".decorate-mosaic-border").click(function() {
		r("MosaicBorder")
	}), $(".decorate-mosaic-fill").click(function() {
		r("MosaicFill")
	}), $(".decorate-tile-zone").click(function() {
		r("TileZone")
	}), $(".decorate-tiles-zone").click(function() {
		r("TileZone")
	}), $(".decorate-grout-zone").click(function() {
		r("GroutZone")
	}), $(".decorate-edit-zone").click(function() {
		r("EditZone")
	}), $(".decorate-delete-zone").click(function() {
		r("DeleteZone")
	}), VUtils.isTabletOrPhoneDevice() || ($(".tiles-list").on("mouseleave", function() {
		o(null)
	}), $(".select-tile-modal").on("mouseenter", function() {
		o(lt)
	}), $(".select-tile-modal").on("mouseleave", function() {
		o(null)
	})), $(".tool").eq(0).click(function() {
		re()
	}), $(".tool").eq(1).click(function() {
		ne()
	}), $(".tool").eq(2).click(function() {
		ve()
	}), $(".tool").eq(3).click(function() {
		be()
	}), $(".tool").eq(4).click(function() {
		Te()
	}), $(".tool").eq(5).click(function() {
		ke()
	}), $(".tool").eq(6).click(function() {
		we()
	}), $(".tool").eq(7).click(function() {
		ye()
	}), $(".tool").eq(8).click(function() {
		$e()
	}), $(".tool").eq(9).click(function() {
		Se()
	}), $(".tool").eq(10).click(function() {
		xe()
	}), $(".tool").eq(11).click(function() {
		Re()
	}), $(".modal-styles-overlay button.close").click(function() {
		n()
	});
	var gt = $(".menu-item p").eq(3).html(),
		ft = $(".menu-item p").eq(4).html(),
		mt = $(".wishlist-list").html(),
		vt = $(".basket-items-container").html(),
		bt = $(".rooms-list").html(),
		Tt = $.trim($(".current-filters").html()),
		kt = $(".vit-tile-range-list").html(),
		wt = $(".vit-range-samples-list").html(),
		yt = $(".vit-tiling-range-list").html(),
		$t = tt.getGUIData();
	$(".vit-scrollbar1").hide(), $(".vit-scrollbar2").hide();
	var St = ["Linear", "Brick", "Diamond", "Herringbone", "BlockHerringbone", "3/4BrickBond"],
		xt = !1,
		Rt = !1;
	M(), G(), Ae(), je(), this.setRoomStylesMode = function(e, t) {
		e ? ($(".menu-items .menu-item").eq(1).hide(), $(".menu-items .menu-item").eq(2).hide(), $(".menu-items .menu-item").eq(4).hide(), $(".vit-tools-tab").hide(), $(".tools-container").hide(), $(".vit-styles-overlay-title").html(t + " Style"), $(".modal-styles-overlay").fadeIn()) : ($(".style-tile-modal").hide(), $(".menu-items .menu-item").eq(1).show(), $(".menu-items .menu-item").eq(2).show(), $(".menu-items .menu-item").eq(4).show(), $(".vit-tools-tab").show(), $(".tools-container").show())
	}, this.showRoomStyleTilePopup = function(e, t, a) {
		return null == e ? void $(".style-tile-modal").hide() : -1 != it ? void $(".style-tile-modal").hide() : ($(".style-tile-modal .vit-thumbnail").attr("src", e.thumbnail), $(".style-tile-modal p").eq(0).html(e.nameText), $(".style-tile-modal p").eq(2).html(e.sizeText), null != e.skuText ? ($(".style-tile-modal p").eq(1).html("Code: " + e.skuText), $(".style-tile-modal p").eq(3).find("strong").html(e.priceText), $(".style-tile-modal p").eq(3).find("span").html(e.priceText2), $(".style-tile-modal p").eq(4).find("strong").html(e.priceM2Text), $(".style-tile-modal p").show(), "" != e.priceM2Text ? ($(".style-tile-modal p").eq(4).find("strong").html(e.priceM2Text), $(".style-tile-modal .price").eq(1).show()) : $(".style-tile-modal .price").eq(1).hide()) : ($(".style-tile-modal p").eq(1).hide(), $(".style-tile-modal p").eq(3).hide(), $(".style-tile-modal p").eq(4).hide()), $(".style-tile-modal p").eq(0).show(), a > tt.getCurRoomHeight() / 2 ? ($(".style-tile-modal").css("top", "5%"), $(".style-tile-modal").css("bottom", "auto")) : ($(".style-tile-modal").css("top", "auto"), $(".style-tile-modal").css("bottom", "5%")), void $(".style-tile-modal").show())
	}, this.showDecorateOptionActions = function(e) {
		xt = !0, setTimeout(function() {
			xt = !1
		}, 500), $(".decorate-options-margins").hide();
		for (var t = 0; t < e.length; ++t) $(".decorate-options ." + e[t]).parent().parent().show();
		var a = 180 + 50 * (e.length - 2);
		$(".modal-container .modal-popup .decorate-options").css("height", a + "px"), $(".modal-decorate-options").fadeIn(), et.decorateActionsPrompt(e)
	}, this.doUpdateTools = function() {
		je()
	}, this.update = function() {
		Ae(), je()
	}, this.scaleRoomImageForDisplay = function(e, t) {
		$(".scene .render").css({
			width: e,
			height: t
		})
	}, this.updateRoomRender = function(e) {
		var t = tt.getRenderData(function(t) {
			tt.usingWebGL() ? ($(".v-scene-render").attr("src", t.toDataURL("image/jpeg", 1)), tt.showMessage(null), void 0 != e && e()) : VUtils.loadImageToSrc(t, ".scene .render", function(t, a, r) {
				tt.showMessage(null), void 0 != e && e()
			})
		})
	}
}
function Outlines(e, t, a) {
	function r(e, t) {
		var a = m.getScreenXYAtTextureXY(D, e, t);
		b.moveTo(a.x, a.y)
	}
	function n(e, t) {
		var a = m.getScreenXYAtTextureXY(D, e, t);
		b.lineTo(a.x, a.y)
	}
	function i(e, t, a) {
		var r = [0, -5, 2, -3, 1, -3, 1, -1, 3, -1, 3, -2, 5, 0, 3, 2, 3, 1, 1, 1, 1, 3, 2, 3, 0, 5, -2, 3, -1, 3, -1, 1, -3, 1, -3, 2, -5, 0, -3, -2, -3, -1, -1, -1, -1, -3, -2, -3, 0, -5],
			n = m.getScreenXYAtTextureXY(D, e, t),
			i = n.x,
			o = n.y;
		a /= 5, b.beginPath(), b.moveTo(i + a * r[0], o + a * r[1]);
		for (var l = 1; l < r.length; ++l) b.lineTo(i + a * r[2 * l + 0], o + a * r[2 * l + 1]);
		b.fill(), b.stroke(), b.closePath()
	}
	function o(e, t, a) {
		var r = 2,
			n = m.getScreenXYAtTextureXY(D, e, t),
			i = n.x,
			o = n.y;
		b.save(), b.beginPath(), b.arc(i, o, a, 0, 2 * Math.PI), b.closePath(), b.fill(), b.stroke(), b.lineWidth = r, b.beginPath(), b.arc(i - .4 * a, o, .35 * a, 0, 2 * Math.PI), b.closePath(), b.stroke(), b.moveTo(i + .15 * a, o - .4 * a), b.lineTo(i + .15 * a, o + .4 * a), b.moveTo(i + .25 * a, o - 0 * a), b.lineTo(i + .65 * a, o - .4 * a), b.moveTo(i + .25 * a, o - 0 * a), b.lineTo(i + .65 * a, o + .4 * a), b.stroke(), b.restore()
	}
	function l(e, t, a) {
		b.beginPath();
		var r = m.getScreenXYAtTextureXY(D, e, t);
		b.arc(r.x, r.y, a, 0, 2 * Math.PI), b.stroke(), b.closePath()
	}
	function s(e, t, a) {
		b.beginPath();
		var r = m.getScreenXYAtTextureXY(D, e, t);
		b.arc(r.x, r.y, a, 0, 2 * Math.PI), b.fill(), b.stroke(), b.closePath()
	}
	function c() {
		$(".v-outlines-canvas").css("cursor", "pointer")
	}
	function u() {
		$(".v-outlines-canvas").css("cursor", "default")
	}
	function r(e, t) {
		var a = m.getScreenXYAtTextureXY(D, e, t);
		b.moveTo(a.x, a.y)
	}
	function n(e, t) {
		var a = m.getScreenXYAtTextureXY(D, e, t);
		b.lineTo(a.x, a.y)
	}
	function d(e) {
		if (e.preventDefault(), null != g.getCurRoom()) {
			var t = -1,
				a = -1;
			switch ("touchmove" == e.type || "touchstart" == e.type || "touchend" == e.type ? (t = e.originalEvent.changedTouches[0].pageX - $(".v-scene-render").offset().left, a = e.originalEvent.changedTouches[0].pageY - $(".v-scene-render").offset().top) : (t = e.pageX - $(".v-scene-render").offset().left, a = e.pageY - $(".v-scene-render").offset().top), t *= g.getCurRoomWidth() / $(".v-scene-render").width(), a *= g.getCurRoomHeight() / $(".v-scene-render").height(), t = parseInt(t), a = parseInt(a), "touchstart" == e.type && (M = !0), e.type) {
			case "mousedown":
				if (M) break;
			case "touchstart":
				switch (P) {
				case "None":
					f.decorate(t, a);
					break;
				case "WaitingToDragSingleTile":
				case "WaitingToEditBorder":
				case "WaitingToEditZone":
					f.decorate(t, a)
				}
				break;
			case "mousemove":
				if (M) break;
			case "touchmove":
				f.canDecorate(t, a) ? c() : u();
				break;
			case "mouseup":
				if (M) break;
			case "touchend":
				switch (P) {
				case "DraggingSingleTile":
				case "EditingBorder":
				case "EditingZone":
				case "WaitingToAddZone":
					f.decorate(t, a)
				}
				break;
			case "mouseout":
				u()
			}
		}
	}
	var p = this,
		g = e,
		f = t,
		m = a,
		v = $(".v-outlines-canvas")[0],
		b = v.getContext("2d"),
		T = 10,
		k = 2 * T;
	VUtils.isTabletOrPhoneDevice() && (T = 20, k = 20);
	var y = "#ffff00",
		S = "#00ff00",
		x = "rgba(0,0,0,0.8)",
		R = "rgba(255,255,0,0.8)",
		A = "rgba(0,255,0,0.8)",
		C = 2,
		P = "None",
		D = -1,
		I = null,
		O = null,
		M = !1;
	$(".v-outlines-canvas").bind("mousedown mousemove mouseup mouseout touchstart touchmove touchend", function(e) {
		d(e)
	}), this.setColours = function(e, t, a, r) {
		y = e, S = t, R = a, A = r
	}, this.isGrabDistance = function(e, t, a, r, n) {
		var i = m.getScreenXYAtTextureXY(e, t, a),
			o = m.getScreenXYAtTextureXY(e, r, n),
			l = Math.sqrt(Math.abs(o.x - i.x) * Math.abs(o.x - i.x) + Math.abs(o.y - i.y) * Math.abs(o.y - i.y));
		return T >= l ? !0 : !1
	}, this.isGrabDistance2 = function(e, t, a, r, n) {
		var i = m.getScreenXYAtTextureXY(e, t, a),
			o = m.getScreenXYAtTextureXY(e, r, n),
			l = Math.sqrt(Math.abs(o.x - i.x) * Math.abs(o.x - i.x) + Math.abs(o.y - i.y) * Math.abs(o.y - i.y));
		return k >= l ? !0 : !1
	}, this.isGrabHLineDistance = function(e, t, a, r, n, i) {
		if (r > t || t > n) return !1;
		var o = m.getScreenXYAtTextureXY(e, t, a),
			l = m.getScreenXYAtTextureXY(e, t, i),
			s = Math.sqrt(Math.abs(l.x - o.x) * Math.abs(l.x - o.x) + Math.abs(l.y - o.y) * Math.abs(l.y - o.y));
		return T >= s ? !0 : !1
	}, this.isGrabVLineDistance = function(e, t, a, r, n, i) {
		if (n > a || a > i) return !1;
		var o = m.getScreenXYAtTextureXY(e, t, a),
			l = m.getScreenXYAtTextureXY(e, r, a),
			s = Math.sqrt(Math.abs(l.x - o.x) * Math.abs(l.x - o.x) + Math.abs(l.y - o.y) * Math.abs(l.y - o.y));
		return T >= s ? !0 : !1
	}, this.getBorderGrabHandles = function() {
		return I
	}, this.setBorderGrabHandles = function(e, t, a, r, n, i) {
		for (var o = 99999, l = 0, s = r; r + n > s; s += 100) {
			var c = m.getScreenXYAtTextureXY(e, s, t + a / 2);
			if (m.getGridIndexAtScreenXY(c.x, c.y, !0) == e) {
				var u = m.getTextureXYAtScreenXY(e, c.x, c.y);
				u.x < o && (o = u.x), u.x > l && (l = u.x)
			}
		}
		var d = o + (l - o) / 2;
		I = [new VPoint(d - i, t), new VPoint(d, t + a / 2), new VPoint(d + i, t + a), new VPoint(d + 2 * i, t + a / 2)]
	}, this.getSingleTileGrabHandle = function() {
		return O
	}, this.setSingleTileGrabHandle = function(e, t, a, r, n) {
		singleTileGrabHandleYOffset = n, O = new VPoint(e + a / 2, t + r / 2 + singleTileGrabHandleYOffset)
	}, this.getSingleTileGrabHandleYOffset = function() {
		return singleTileGrabHandleYOffset
	}, this.getMode = function() {
		return P
	}, this.setMode = function(e) {
		vout("setMode(): " + e), P = e, "None" == P && b.clearRect(0, 0, v.width, v.height)
	}, this.setupNewRoom = function(e) {
		v.width = e.width, v.height = e.height
	}, this.scaleForDisplay = function() {
		return;
		var e = $(window).width() / v.width;
		w = "100%", h = "auto", v.height * e < $(window).height() && (w = "auto", h = "100%"), $(".v-outlines-canvas").css({
			width: w,
			height: h
		})
	}, this.clear = function() {
		b.clearRect(0, 0, v.width, v.height)
	}, this.drawZone = function(e, t, a, l, c, u, d, h, p, g) {
		function f(e, t, a, r, n) {
			(p || g == a) && (g == a ? b.fillStyle = A : b.fillStyle = R, b.strokeStyle = x, void 0 != n ? o(e, t, k) : r ? i(e, t, k) : s(e, t, T))
		}
		D = e, b.clearRect(0, 0, v.width, v.height), b.save();
		var w = m.getOutlineForGrid(e);
		b.beginPath(), b.moveTo(w[0].x, w[0].y);
		for (var P = 0; P < w.length; ++P) b.lineTo(w[P].x, w[P].y);
		b.closePath(), b.clip();
		var I = u.decorateAreaTop.areaX,
			O = u.decorateAreaTop.areaY,
			M = u.decorateAreaTop.areaW,
			B = u.decorateAreaTop.areaY + u.decorateAreaTop.areaH;
		null != u.decorateAreaBottom && (B = u.decorateAreaBottom.areaY + u.decorateAreaBottom.areaH - u.decorateAreaTop.areaY), b.beginPath();
		var Y = 5;
		r(I - Y, O - Y), n(I + M + Y, O - Y), n(I + M + Y, O + B + Y), n(I - Y, O + B + Y), b.closePath(), b.clip();
		for (var P = 0; P < d.length; ++P) {
			var F = d[P];
			if ("" != F && "-" != F) {
				var G = F.split(","),
					E = parseInt(G[0]),
					W = parseInt(G[2]),
					L = parseInt(G[1]) - E + 1,
					q = parseInt(G[3]) - W + 1;
				b.beginPath(), b.moveTo(0, 0), b.lineTo(v.width, 0), b.lineTo(v.width, v.height), b.lineTo(0, v.height), b.lineTo(0, 0), n(E, W), n(E, W + q), n(E + L, W + q), n(E + L, W), n(E, W), b.closePath(), b.clip()
			}
		}
		b.lineWidth = C, h ? b.strokeStyle = S : b.strokeStyle = y, b.beginPath(), r(t, a), n(t + l, a), n(t + l, a + c), n(t, a + c), n(t, a), b.stroke(), b.closePath(), f(t, a, "Top-Left", !1), f(t + l / 2, a, "Top", !1), f(t + l, a, "Top-Right", !1), f(t + l, a + c / 2, "Middle-Right", !1), f(t + l, a + c, "Bottom-Right", !1), f(t + l / 2, a + c, "Bottom", !1), f(t, a + c, "Bottom-Left", !1), f(t, a + c / 2, "Middle-Left", !1), f(t + l / 2, a + c / 2, "Centre", !0), f(t + 1.5 * l / 2, a + c / 2, "Finish", !1, !0), b.restore(), b.drawImage(m.getOverlayCanvas(), 0, 0)
	}, this.drawBorder = function(e, t, a, l, c, u, d, h) {
		function p(e, t, a, r, n) {
			h == a ? b.fillStyle = A : b.fillStyle = R, b.strokeStyle = x, void 0 != n ? o(e, t, k) : r ? i(e, t, k) : s(e, t, T)
		}
		D = e, I[0].y = t, I[1].y = t + a / 2, I[2].y = t + a, I[3].y = t + a / 2, b.clearRect(0, 0, v.width, v.height), b.save();
		var g = m.getOutlineForGrid(e);
		b.beginPath(), b.moveTo(g[0].x, g[0].y);
		for (var f = 0; f < g.length; ++f) b.lineTo(g[f].x, g[f].y);
		b.closePath(), b.clip();
		var w = l.decorateAreaTop.areaX,
			P = l.decorateAreaTop.areaY,
			O = l.decorateAreaTop.areaW,
			M = l.decorateAreaTop.areaY + l.decorateAreaTop.areaH;
		null != l.decorateAreaBottom && (M = l.decorateAreaBottom.areaY + l.decorateAreaBottom.areaH - l.decorateAreaTop.areaY), b.beginPath();
		var B = 5;
		r(w - B, P - B), n(w + O + B, P - B), n(w + O + B, P + M + B), n(w - B, P + M + B), b.closePath(), b.clip();
		for (var f = 0; f < c.length; ++f) {
			var Y = c[f];
			if ("" != Y && "-" != Y) {
				var F = Y.split(","),
					G = parseInt(F[0]),
					E = parseInt(F[2]),
					W = parseInt(F[1]) - G + 1,
					L = parseInt(F[3]) - E + 1;
				b.beginPath(), b.moveTo(0, 0), b.lineTo(v.width, 0), b.lineTo(v.width, v.height), b.lineTo(0, v.height), b.lineTo(0, 0), n(G, E), n(G, E + L), n(G + W, E + L), n(G + W, E), n(G, E), b.closePath(), b.clip()
			}
		}
		b.lineWidth = C, b.beginPath(), u ? b.strokeStyle = S : b.strokeStyle = y, r(w, t), n(w + O, t), b.closePath(), b.stroke(), b.beginPath(), r(w, t + a), n(w + O, t + a), b.closePath(), b.stroke(), b.restore(), b.drawImage(m.getOverlayCanvas(), 0, 0), p(I[0].x, I[0].y, "Top", !1), p(I[1].x, I[1].y, "Centre", !0), p(I[2].x, I[2].y, "Bottom", !1), p(I[3].x, I[3].y, "Finish", !1, !0)
	}, this.drawSingleTileGrabHandleOnly = function(e, t, a) {
		D = a, O.x = e + w / 2, O.y = t + h / 2 + singleTileGrabHandleYOffset, b.clearRect(0, 0, v.width, v.height), b.strokeStyle = S, l(e, t, 1.1 * k), b.fillStyle = A, b.strokeStyle = x, i(e, t, k)
	}, this.drawSingleTile = function(e, t, a, o, s, c, u, d, h, p, g, f, T, w, P, I) {
		function M(e, t, a) {
			w ? b.strokeStyle = S : b.strokeStyle = y, b.lineWidth = C, w ? b.strokeStyle = S : b.strokeStyle = y, P ? b.strokeStyle = S : b.strokeStyle = y, l(e, t, 1.1 * k), P ? b.fillStyle = A : b.fillStyle = R, b.strokeStyle = x, i(e, t, k)
		}
		D = a, I && (O.x = o + c / 2, O.y = s + u / 2 + singleTileGrabHandleYOffset, -1 == e && (e = O.x, t = O.y)), b.clearRect(0, 0, v.width, v.height), b.save();
		var B = m.getOutlineForGrid(a);
		b.beginPath(), b.moveTo(B[0].x, B[0].y);
		for (var Y = 0; Y < B.length; ++Y) b.lineTo(B[Y].x, B[Y].y);
		b.closePath(), b.clip(), b.beginPath();
		var F = 5;
		r(d - F, h - F), n(d + p + F, h - F), n(d + p + F, h + g + F), n(d - F, h + g + F), b.closePath(), b.clip();
		for (var Y = 0; Y < f.length; ++Y) {
			var G = f[Y];
			if ("" != G && "-" != G) {
				var E = G.split(","),
					W = parseInt(E[0]),
					L = parseInt(E[2]),
					q = parseInt(E[1]) - W + 1,
					H = parseInt(E[3]) - L + 1;
				b.beginPath(), b.moveTo(0, 0), b.lineTo(v.width, 0), b.lineTo(v.width, v.height), b.lineTo(0, v.height), b.lineTo(0, 0), n(W, L), n(W, L + H), n(W + q, L + H), n(W + q, L), n(W, L), b.closePath(), b.clip()
			}
		}
		w ? b.strokeStyle = S : b.strokeStyle = y, b.lineWidth = C, b.beginPath(), "Diamond" == T ? (r(o + c / 2, s), n(o + c, s + u / 2), n(o + c / 2, s + u), n(o, s + u / 2), n(o + c / 2, s)) : (r(o, s), n(o + c, s), n(o + c, s + u), n(o, s + u), n(o, s)), b.stroke(), b.closePath(), b.restore(), I && (b.lineWidth = C, w ? b.strokeStyle = S : b.strokeStyle = y, b.beginPath(), r(o + c / 2, s + u / 2), n(e, t), b.stroke(), b.closePath()), b.drawImage(m.getOverlayCanvas(), 0, 0), I && M(e, t, w)
	}
}
function SupertextureWebGL(e, t, a, r) {
	function n(e, t, a, r) {
		var n = {
			base64Data: e.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, ""),
			folder: t,
			filename: a
		};
		$.post("vsavebase64.php", n, function(e) {
			null != r && r()
		})
	}
	function i(e) {
		if (1 == e) return u;
		var t = document.createElement("canvas");
		return t.width = parseInt(u.width * e), t.height = parseInt(u.height * e), t.getContext("2d").clearRect(0, 0, t.width, t.height), t.getContext("2d").drawImage(u, 0, 0, t.width, t.height), t
	}
	function o(e) {
		function t(e) {
			return 255 == r.data[e + 0] && 0 == r.data[e + 1] && 255 == r.data[e + 2] ? !1 : r.data[e + 3] >= 250 ? !0 : !1
		}
		if (VUtils.isTabletOrPhoneDevice()) return !1;
		vout("isSomeNonGroutAroundTileHV(): Start");
		for (var a = e.getContext("2d"), r = a.getImageData(0, 0, e.width, e.height), n = [!1, !1], i = 0; i < e.width; ++i) if (t(4 * i) && t(4 * ((e.height - 1) * e.width + i))) {
			n[1] = !0;
			break
		}
		for (var o = 0; o < e.height; ++o) if (t(4 * (o * e.width)) && t(4 * (o * e.width + e.width - 1))) {
			n[0] = !0;
			break
		}
		return vout("isSomeNonGroutAroundTileHV(): End"), r = null, n
	}
	var l = this,
		s = e,
		c = t,
		u = r;
	null == u && (u = document.createElement("canvas"), u.width = s, u.height = c);
	var d = u.getContext("2d");
	d.fillStyle = "#" + a, d.fillRect(0, 0, u.width, u.height), this.reuse = function(e, t, a, r) {
		s = e, c = t, r && (u.width = s, u.height = c, d = u.getContext("2d")), "Transparent" == a ? d.clearRect(0, 0, u.width, u.height) : (d.fillStyle = "#" + a, d.fillRect(0, 0, u.width, u.height))
	}, this.getCanvas = function() {
		return u
	}, this.tileAndGroutArea = function(e, t, a, r, n, i, l, h, p, g, f, m, v, b, T, k, w, y) {
		function S(e, t, a, r, n, i) {
			var o = !1;
			null == k ? o = !0 : k[(r + 1e4) % 10][(n + 1e4) % 10] == w && (o = !0);
			var l;
			if (o) {
				var s = Math.floor(VUtils.getRandom() * a.tiles.length),
					l = a.tiles[s];
				void 0 != i ? d.drawImage(a.canvas, l.x, l.y, l.w, l.h, e, t, l.h, l.w) : d.drawImage(a.canvas, l.x, l.y, l.w, l.h, e, t, l.w, l.h), ++D
			}
			return l
		}
		function x(e, t, a, r, n, i) {
			var o = !1;
			null == k ? o = !0 : k[(r + 1e4) % 10][(n + 1e4) % 10] == w && (o = !0);
			var l;
			if (o) {
				var s = Math.floor(VUtils.getRandom() * a.tiles.length),
					l = a.tiles[s];
				void 0 != i ? d.drawImage(a.canvas, l.x, l.y, l.w, l.h, e, t, W, E) : d.drawImage(a.canvas, l.x, l.y, l.w, l.h, e, t, E, W), O[0] && d.drawImage(a.canvas, l.x + .9 * l.w, l.y, .1 * l.w, l.h, e + .9 * E + 1, t, .1 * E, W), O[1] && d.drawImage(a.canvas, l.x, l.y + .9 * l.h, l.w, .1 * l.h, e, t + .9 * W + 1, E, .1 * W), ++D
			}
			return l
		}
		function R(e, t, a, r, n, i) {
			var o = !1;
			null == k ? o = !0 : k[(r + 1e4) % 10][(n + 1e4) % 10] == w && (o = !0);
			var l;
			if (o) {
				var s = Math.floor(VUtils.getRandom() * a.tiles.length),
					l = a.tiles[s];
				d.translate(e, t), d.rotate(90 * Math.PI / 180), void 0 != i ? d.drawImage(a.canvas, l.x, l.y, l.w, l.h, 0, -W, E, W) : d.drawImage(a.canvas, l.x, l.y, l.w, l.h, 0, -E, W, E), O[0] && d.drawImage(a.canvas, l.x + .9 * l.w, l.y, .1 * l.w, l.h, 0 + .9 * W + 1, -E, .1 * W, E), O[1] && d.drawImage(a.canvas, l.x, l.y + .9 * l.h, l.w, .1 * l.h, 0, -E + .9 * E + 1, W, .1 * E), d.rotate(-90 * Math.PI / 180), d.translate(-e, -t), ++D
			}
			return l
		}
		function A(e, t, a, r, n) {
			var i = !1;
			null == k ? i = !0 : k[(r + 1e4) % 10][(n + 1e4) % 10] == w && (i = !0);
			var o;
			if (i) {
				var l = Math.floor(VUtils.getRandom() * a.tiles.length),
					o = a.tiles[l];
				d.translate(e, t), d.rotate(45 * Math.PI / 180), d.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, E, W), d.rotate(-45 * Math.PI / 180), d.translate(-e, -t), ++D
			}
			return o
		}
		function C(e, t, a, r, n) {
			var i = !1;
			null == k ? i = !0 : k[(r + 1e4) % 10][(n + 1e4) % 10] == w && (i = !0);
			var o;
			if (i) {
				var l = Math.floor(VUtils.getRandom() * a.tiles.length),
					o = a.tiles[l];
				d.translate(e, t), d.rotate(135 * Math.PI / 180), d.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, E, W), d.rotate(-135 * Math.PI / 180), d.translate(-e, -t), ++D
			}
			return o
		}
		function P(e, t, a, r, n) {
			var i = !1;
			null == k ? i = !0 : k[(r + 1e4) % 10][(n + 1e4) % 10] == w && (i = !0);
			var o;
			if (i) {
				var l = Math.floor(VUtils.getRandom() * a.tiles.length),
					o = a.tiles[l];
				d.translate(e, t), d.rotate(225 * Math.PI / 180), d.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, E, W), d.rotate(-225 * Math.PI / 180), d.translate(-e, -t), ++D
			}
			return o
		}
		vout("SupertextureWebGL:tileAndGroutArea(): Start");
		var D = 0,
			I = 0,
			O = [!1, !1];
		"7F7FFF" != b && (O = o(f.canvas)), d.save();
		var M = n + i;
		VUtils.setRandomSeed(M);
		var B = new VPoint(m, v),
			Y = a,
			F = r.width,
			G = r.height;
		"Mosaic" == r.type && (-1 == r.mosaicsMultiplierW ? (F = f.tiles[0].w, G = f.tiles[0].h) : (F /= r.mosaicsMultiplierW, G /= r.mosaicsMultiplierH));
		var E = F,
			W = G;
		Y && (E = G, W = F), "StaggerWood" == t && (E = 0, W = 0), f.rotateForLandscape && (Y = !Y);
		var L = u.width / s,
			q = u.height / c;
		d.scale(L, q);
		for (var H = 0; H < T.length; ++H) {
			var X = T[H];
			if ("" != X && "-" != X) {
				var U = X.split(","),
					V = parseInt(U[0]),
					N = parseInt(U[2]),
					j = parseInt(U[1]) - V + 1,
					Z = parseInt(U[3]) - N + 1;
				d.beginPath(), d.moveTo(0, 0), d.lineTo(u.width / L, 0), d.lineTo(u.width / L, u.height / q), d.lineTo(0, u.height / q), d.lineTo(0, 0), d.lineTo(V, N), d.lineTo(V, N + Z), d.lineTo(V + j, N + Z), d.lineTo(V + j, N), d.lineTo(V, N), d.lineTo(0, 0), d.closePath(), d.clip()
			}
		}
		switch (null != p && (d.beginPath(), d.rect(p.x, p.y, p.w, p.h), d.closePath(), d.clip()), null != g && (d.beginPath(), d.rect(g.x, g.y, g.w, g.h), d.closePath(), d.clip()), d.beginPath(), d.rect(n, i, l, h), d.closePath(), d.clip(), null != k && 0 != w || "SingleTileDiamond" == t || ("Transparent" == b ? d.clearRect(n, i, l, h) : (d.fillStyle = "#" + b, d.fillRect(n, i, l, h))), t) {
		case "StaggerWood":
			if (Y) {
				for (var _ = B.x - n; _ > 0;) _ -= f.height;
				for (var z = 0, Q = 0, V = _; l > V; V += f.height) for (var K = -Math.floor(Math.random() * f.width), N = K; h > N;) {
					var J = S(n + V, i + N, f, z, Q, "SwapWoodWH");
					N += J.w
				}
			} else {
				for (var K = B.y - i; K > 0;) K -= f.height;
				for (var z = 0, Q = 0, N = K; h > N; N += f.height) for (var _ = -Math.floor(Math.random() * f.width), V = _; l > V;) {
					var J = S(n + V, i + N, f, z, Q);
					V += J.w
				}
			}
			break;
		case "BlockHerringbone":
			for (var ee = n + l, te = i + h, _ = B.x; _ > n;) _ -= E;
			for (var K = B.y; K > i;) K -= W;
			if (Y) {
				for (var Q = 0, z = 0, V = _, N = K;;) {
					for (var ae = N, z = 0, re = V; ee > re; re += W) R(re, ae, f, z, Q), --Q, x(re + E, ae + W - E, f, z, Q, "SwapTileWH"), Q += 3, ae += W;
					if (V -= E, ++z, N > te) break;
					N += E
				}
				for (var Q = 0, z = 0, V = _, N = K;;) {
					for (var ae = N, z = 0, re = V; ee > re; re += W) R(re, ae, f, z, Q), --Q, x(re + E, ae + W - E, f, z, Q, "SwapTileWH"), Q += 3, ae += W;
					if (V += E, ++z, V > ee) break;
					N -= E
				}
			} else {
				_ -= 6 * Math.max(E, W), K -= 6 * Math.max(E, W), ee += 2 * Math.max(E, W), te += 2 * Math.max(E, W);
				for (var Q = 0, z = 0, N = K;;) {
					for (var ae = N, z = 0, V = _; ee > V; V += E) x(V, ae, f, z, Q), --z, R(V + E - W, ae - E, f, z, Q, "SwapTileWH"), z += 3, ae -= E;
					if (_ -= E - W, ++Q, ae > te) break;
					N += E + W
				}
			}
			break;
		case "Herringbone":
			var ne = .7071067811881;
			if (Y) {
				var j = W,
					Z = E,
					ie = E;
				E = W, W = ie;
				for (var _ = B.x - n; _ > 0;) _ -= j * ne;
				for (var K = B.y - i; K > 0;) K -= j * ne;
				_ -= 2 * E * ne, K -= 2 * E * ne, l += 2 * E * ne, h += 2 * E * ne, l += 2 * Math.max(E, W) * ne, h += 2 * Math.max(E, W) * ne;
				for (var Q = 0, z = 0, V = _; l > V; V += 1 * Z / ne) {
					for (var N = K; h > N; N += 2 * j * ne) C(n + V, i + N, f, z, Q), --Q, P(n + V, i + N, f, z, Q), Q += 3;
					++z
				}
			} else {
				for (var j = E, Z = W, _ = B.x - n; _ > 0;) _ -= 1 * j / ne;
				for (var K = B.y - i; K > 0;) K -= 1 * j / ne;
				_ -= 2 * E * ne, K -= 2 * E * ne, l += 2 * E * ne, h += 2 * E * ne, l += 2 * Math.max(E, W) * ne, h += 2 * Math.max(E, W) * ne;
				for (var Q = 0, z = 0, N = K; h > N; N += 1 * Z / ne) {
					for (var V = _; l > V; V += 2 * j * ne) A(n + V, i + N, f, z, Q), --z, C(n + V, i + N, f, z, Q), z += 3;
					++Q
				}
			}
			break;
		case "SingleTileDiamond":
			A(n + l / 2, i, f, 0, 0);
			break;
		case "Diamond":
			var ne = .7071067811881;
			j = E / ne, Z = W / ne, l += j, h += Z;
			for (var ee = n + l, te = i + h, _ = B.x; _ > n;) _ -= j;
			for (var K = B.y; K > i;) K -= Z;
			_ -= j / 2;
			for (var Q = 0, N = K; te > N; N += Z) {
				for (var z = 0, V = _; ee > V; V += j) A(V, N, f, z, Q), A(V - j / 2, N - Z / 2, f, z, Q + 1), z += 2;
				Q += 2
			}
			break;
		case "3/4BrickBond":
			for (var ee = n + l, te = i + h, _ = B.x; _ > n;) _ -= E;
			for (var K = B.y; K > i;) K -= W;
			var Q = 1e4 - Math.floor((B.y - i) / W);
			B.y == i && ++Q;
			for (var N = K; te > N; N += W) {
				var oe = 0;
				Q % 2 == 1 && (oe = E / 4);
				for (var z = 0, V = _ - oe; ee > V; V += E) Y ? R(V, N, f, z, Q) : x(V, N, f, z, Q), ++z;
				++Q
			}
			break;
		case "Brick":
			for (var ee = n + l, te = i + h, _ = B.x; _ > n;) _ -= E;
			for (var K = B.y; K > i;) K -= W;
			var Q = 1e4 - Math.floor((B.y - i) / W);
			B.y == i && ++Q;
			for (var N = K; te > N; N += W) {
				var oe = 0;
				Q % 2 == 1 && (oe = E / 2);
				for (var z = 0, V = _ - oe; ee > V; V += E) Y ? R(V, N, f, z, Q) : x(V, N, f, z, Q), ++z;
				++Q
			}
			break;
		default:
			for (var ee = n + l, te = i + h, _ = B.x; _ > n;) _ -= E;
			for (var K = B.y; K > i;) K -= W;
			for (var Q = 0, N = K; te > N; N += W) {
				for (var z = 0, V = _; ee > V; V += E) Y ? R(V, N, f, z, Q) : x(V, N, f, z, Q), ++z;
				++Q
			}
		}
		if ("Floor" != e && 0 == n && !y) {
			var ne = parseInt(b, 16),
				le = (16711680 & ne) >> 16,
				se = (65280 & ne) >> 8,
				ce = 255 & ne,
				ue = 255;
			"Transparent" == b && (le = 0, se = 0, ce = 0, ue = 0);
			for (var de = d.getImageData(parseInt(L * B.x), q * i, 3, q * h), H = 0; q * h > H; ++H) for (var H = 0; H < de.width * de.height; ++H) de.data[4 * H + 0 + 0] = le, de.data[4 * H + 0 + 1] = se, de.data[4 * H + 0 + 2] = ce, de.data[4 * H + 0 + 3] = ue;
			d.putImageData(de, L * B.x, q * i)
		}
		d.restore(), vout("SupertextureWebGL:tileAndGroutArea(): End")
	}, this.colourArea = function(e, t, a, r, n, i, o) {
		d.save();
		var l = u.width / s,
			h = u.height / c;
		d.scale(l, h);
		for (var p = 0; p < o.length; ++p) {
			var g = o[p];
			if ("" != g && "-" != g) {
				var f = g.split(","),
					m = parseInt(f[0]),
					v = parseInt(f[2]),
					b = parseInt(f[1]) - m + 1,
					T = parseInt(f[3]) - v + 1;
				d.beginPath(), d.moveTo(0, 0), d.lineTo(u.width / l, 0), d.lineTo(u.width / l, u.height / h), d.lineTo(0, u.height / h), d.lineTo(0, 0), d.lineTo(m, v), d.lineTo(m, v + T), d.lineTo(m + b, v + T), d.lineTo(m + b, v), d.lineTo(m, v), d.lineTo(0, 0), d.closePath(), d.clip()
			}
		}
		null != i && (d.beginPath(), d.rect(i.x, i.y, i.w, i.h), d.closePath(), d.clip()), d.fillStyle = "#" + e, d.fillRect(t, a, r, n), d.restore()
	}, this.colourZone = function(e, t, a, r, n, i, o, l, h) {
		d.save();
		var p = u.width / s,
			g = u.height / c;
		d.scale(p, g);
		for (var f = 0; f < h.length; ++f) {
			var m = h[f];
			if ("" != m && "-" != m) {
				var v = m.split(","),
					b = parseInt(v[0]),
					T = parseInt(v[2]),
					k = parseInt(v[1]) - b + 1,
					w = parseInt(v[3]) - T + 1;
				d.beginPath(), d.moveTo(0, 0), d.lineTo(u.width / p, 0), d.lineTo(u.width / p, u.height / g), d.lineTo(0, u.height / g), d.lineTo(0, 0), d.lineTo(b, T), d.lineTo(b, T + w), d.lineTo(b + k, T + w), d.lineTo(b + k, T), d.lineTo(b, T), d.lineTo(0, 0), d.closePath(), d.clip()
			}
		}
		null != l && (d.beginPath(), d.rect(l.x, l.y, l.w, l.h), d.closePath(), d.clip()), d.fillStyle = "#" + e, d.fillRect(r, n, i, o), d.strokeStyle = "#" + t, d.lineWidth = a, d.beginPath(), d.moveTo(r, n), d.lineTo(r + i, n), d.lineTo(r + i, n + o), d.lineTo(r, n + o), d.lineTo(r, n), d.stroke(), d.closePath(), d.restore()
	}, this.saveAsPNG = function(e, t, a) {
		n(u, e, t, a)
	}
}
function VEmail() {
	var e = this;
	this.send = function(e, t, a, r) {
		var n = {
			from: a,
			to: r,
			subject: t,
			htmlEmail: e
		};
		$.post("vsendemail.php", n, function(e) {
		//	alert(e)
		})
	}, this.checkValidEmailAddress = function(e) {
		if (-1 == e.indexOf(".")) return !1;
		var t = e.indexOf("@");
		if (-1 == t) return !1;
		if (0 == t) return !1;
		if (t == e.length - 1) return !1;
		for (var a = 0, r = "", n = 0; n < e.length; ++n) {
			var i = e.charAt(n);
			if ("@" == i) {
				if (++a, 2 == a) return !1;
				if ("." == r) return !1
			} else if ("." == i && "@" == r) return !1;
			r = i
		}
		return !0
	}
}
function checkWebGL(e) {
	var t = !0;
	return VUtils.webGLSupported() || (t = !1), -1 != location.href.indexOf("testnowebgl") && (t = !1), -1 != location.href.indexOf("testwebglfail") && setWebGLTesting(), t ? void 0 : void alert("A browser with WebGL support is required.");
	var a = VUtils.loadCookie(webGLRanOKCookieName);
	return null != a && "Testing" == a ? ($(".run-layering").click(function() {
		$(".modal-webglfail-overlay").fadeOut();
		var e = VUtils.getBaseURL() + "basic";
		window.location.href = e
	}), $(".run-retrywebgl").click(function() {
		$(".modal-webglfail-overlay").fadeOut(), e()
	}), void $(".modal-webglfail-overlay").fadeIn()) : void e()
}
function setWebGLTesting() {
	VUtils.saveCookie(webGLRanOKCookieName, "Testing")
}
function setWebGLOK() {
	VUtils.saveCookie(webGLRanOKCookieName, "OK")
}
function VTilingEngine(e, t) {
	function a() {
		return;
		VUtils.isTabletOrPhoneDevice() && ($("body").addClass("touch-device"), $(".decorate-tile-zone-text").html($(".decorate-tile-zone-text").html().replace("click", "tap"))), VUtils.isTabletOrPhoneDevice() ? ($(".vit-styles-overlay .tablet").show(), $(".vit-styles-overlay .non-tablet").hide()) : ($(".vit-styles-overlay .non-tablet").show(), $(".vit-styles-overlay .tablet").hide()), makingPredecoratedRooms && $(".save-saved-rooms-to-disk").show()
	}
	function r(e, t, a) {
		function r(i) {
			return i == e.length ? void(void 0 != a && a()) : void n(e[i], t[i], function() {
				r(i + 1)
			})
		}
		return;
		return "DEV" == runningEnvironment || "TEST" == runningEnvironment ? void(void 0 != a && a()) : void r(0)
	}
	function n(e, t, a) {
		return;
		if ("DEV" == runningEnvironment || "TEST" == runningEnvironment) return void(void 0 != a && a());
		var r = "http://www.toppstiles.co.uk/e360/s_basket_add_new.asp",
			n = {
				AjaxCall: "1",
				productid: e.id360,
				quantity: t,
				updatequantity: "yes",
				allownegative: ""
			}; - 999999 == t ? (n.sample_option_field = "true", n.quantity = 1) : 0 > t && (n.allownegative = "yes"), $.post(r, n, function(e) {
			void 0 != a && a()
		})
	}
	function i() {
		function e(e) {
			var t = e.indexOf("360DATASTART");
			if (-1 != t) {
				for (var a = new Array;;) {
					if (t = e.indexOf('class="ProductDetails"', t), -1 == t) break;
					var r = e.indexOf("<em>Sample Tile</em>", t),
						n = 'productid" value="';
					t = e.indexOf(n, t) + n.length;
					var i = !1; - 1 != r && t > r && (i = !0), r = e.indexOf('"', t);
					var o = e.substring(t, r);
					n = 'quantity" value="', t = e.indexOf(n, t) + n.length, r = e.indexOf('"', t), qty = -parseInt(e.substring(t, r));
					var l = new Object;
					if (l.tile = at(o), null != l.tile) {
						l.isSample = i, l.quantity = qty, l.mainSiteQuantity = qty, l.tempQuantity = qty, l.tempCoverageM2 = He(l.tile, l.tempQuantity), a.push(l.tile.sku);
						for (var s = !1, c = 0; c < Ft.length; ++c) Ft[c].tile.sku == l.tile.sku && (Ft[c].mainSiteQuantity = qty, s = !0);
						s || Ft.push(l)
					}
				}
				for (var c = 0; c < Ft.length; ++c) - 1 == a.indexOf(Ft[c].tile.sku) && (Ft.splice(c, 1), --c)
			}
		}
		return;
		if ("DEV" != runningEnvironment && "TEST" != runningEnvironment) {
			var t = "http://www.toppstiles.co.uk/e360/s_basket_view_basket_ajax.asp?" + (new Date).getTime();
			VUtils.loadTextFromURL(t, function(t) {
				e(t), L(), N(), da.update()
			})
		}
	}
	function o(e) {
		function t() {
			var t = "http://www.toppstiles.co.uk/VIT/wishlisttoflash.asp?guid=" + kt;
			VUtils.loadTextFromURL(t, function(t) {
				var a = t.indexOf("guid=");
				if (-1 != a) {
					for (Yt = new Array;;) {
						var r = "&products=",
							a = t.indexOf(r, a);
						if (-1 == a) break;
						a += r.length;
						var n = t.indexOf("&", a),
							i = t.substring(a, n);
						Yt.push(i), a = n
					}
					W(), da.update(), void 0 != e && e()
				}
			})
		}
		return;
		if (-1 == location.href.indexOf("localhost")) if (null == kt) {
			var a = "http://www.toppstiles.co.uk/VIT/wishlisttoflash.asp?guid=***UNKNOWN***";
			VUtils.loadTextFromURL(a, function(e) {
				kt = e.substring(e.indexOf("guid=") + "guid=".length, e.indexOf("&")), t()
			})
		} else t()
	}
	function l() {
		return;
		if (-1 == location.href.indexOf("localhost")) {
			for (var e = "http://www.toppstiles.co.uk/VIT/wishlistfromflash.asp?guid=" + kt, t = 0; t < Yt.length; ++t) e += "&products[]=" + Yt[t];
			VUtils.loadTextFromURL(e, function(e) {
				da.update()
			})
		}
	}
	function s() {
		for (var e = ut.allProcessedTiles, t = 0, a = 0, r = new Array, n = 0; n < e.length; ++n) {
			for (var i = !1, o = 0; o < ut.currentTTProducts.length; ++o) if (e[n].sku == ut.currentTTProducts[o].sku) {
				i = !0, r.push(e[n].sku);
				break
			}
			i ? ++t : ++a
		}
		alert("numTilesProcessedAndStillCurrent: " + t), alert("numTilesProcessedAndNotCurrent: " + a);
		for (var l = 0, s = 0, c = new Array, n = 0; n < e.length; ++n) {
			for (var i = !1, o = 0; o < ut.currentTTProducts2.length; ++o) if (e[n].sku == ut.currentTTProducts2[o].sku) {
				i = !0, c.push(e[n].sku);
				break
			}
			i ? ++l : ++s
		}
		alert("numTilesProcessedAndStillCurrent2: " + l), alert("numTilesProcessedAndNotCurrent2: " + s), alert(ut.processedTiles.length);
		for (var u = 0, n = 0; n < ut.processedTiles.length; ++n) - 1 == c.indexOf(ut.processedTiles[n].sku) && (++u, vout(ut.processedTiles[n].sku));
		alert("numMissing: " + u)
	}
	function c() {
		var e = Array(),
			t = b(ta, 0, 0);
		bt && (t = nt(0, 0).toDataURL("image/jpeg", .75)), e.src = t, e.tilesData = new Array;
		for (var a = it.getSortedTilesUsed(), r = 0; r < a.length; ++r) {
			var n = tt(a[r]),
				i = new Object;
			i.thumbnailURL = gt + "thumbnails/tiles/" + n.sku + ".jpg?" + uncache, i.nameText = n.name, i.codeText = n.sku, e.tilesData.push(i)
		}
		return e
	}
	function u() {
		window.open("print.html?" + uncache)
		
	}
	function addnew() {
		window.open("addnew.html?" + uncache)
	}
	function d(t, a, r, n) {
		e.broadcastMessage("SendingEmail");
		var i = 800,
			o = "email-",
			l = T(ta, i, 0, o),
			s = {};
		bt && (s.base64RoomImage = nt(i, 0).toDataURL("image/jpeg", .75).replace("data:image/jpeg;base64,", "")), $.post(l, s, function(e) {
			if (-1 == e.indexOf("[[[OK]]]")) return void verror("Email Failed: " + e);
			var i = e.replace("[[[OK]]]", ""),
				o = "";
			o += "<!DOCTYPE HTML>", o += "<html>", o += "<head>", o += "<title>" + $("title").text() + "</title>", o += "</head>", o += "<body>", o += n, o += "</body>", o += "</html>", o = o.replace("[[[RENDER]]]", '<a href="' + dt + '"><img src="' + i + '" /></a>'), ma.send(o, r, t, a), R("Your email has been sent.", 1500)
		})
	}
	function p(e, t, a, r) {
		var n = "",
			i = 800,
			o = "";
		switch (e) {
		case "Facebook":
			n = "facebook-", o = "Share-Facebook";
			break;
		case "Twitter":
			n = "twitter-", o = "Share-Twitter";
			break;
		case "Pinterest":
			n = "pinterest-", o = "Share-Pinterest"
		}
		var l = "";
		l += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n', l += '<html xmlns="http://www.w3.org/1999/xhtml">\n', l += "<head>\n", l += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n', l += '<meta property="og:title" content="' + t + '" />\n', l += '<meta property="og:description" content="' + a + '" />\n', l += '<meta property="og:image" content="[[[IMAGEURL]]]" />\n', l += "<title>" + $("title").text() + "</title>", l += "</head>\n", l += "<body>\n", l += '<[[[script]]] type="text/javascript">\n', l += 'window.location.href="' + window.location.href + '";', l += "</[[[script]]]>\n", l += "</body>\n", l += "</html>\n";
		var s = T(ta, i, 0, n),
			c = {
				facebookHTML: l
			};
		bt && (c.base64RoomImage = nt(i, 0).toDataURL("image/jpeg", .75).replace("data:image/jpeg;base64,", "")), $.post(s, c, function(t) {
			if (-1 == t.indexOf("[[[OK]]]")) return r(!1), void verror("Share Failed: " + t);
			var a = t.replace("[[[OK]]]", "");
			oa = a, ia = e, "Facebook" != e ? r(!0) : va.facebookScrapeURL(oa, function() {
				r(!0)
			})
		})
	}
	function g(e) {
		va.send(ia, e, oa, dt), ia = ""
	}
	function f() {
		return;
		if (null != Dt) {
			var e = $(window).width() / Dt.width;
			w = "100%", h = "auto", Dt.height * e < $(window).height() && (w = "auto", h = "100%"), da.scaleRoomImageForDisplay(w, h), outlines.scaleForDisplay()
		}
	}
	function m(e, t, a) {
		var r = pt + "vgetroomimagejpg.php?cache=1&" + k(e, t, a);
		return r
	}
	function v(e, t, a) {
		var r = pt + "vgetroomimagejpg.php?cache=1&" + y(e, t, a);
		return r
	}
	function b(e, t, a) {
		var r = pt + "vgetroomimagejpg.php?cache=1&" + k(e, t, a);
		return r
	}
	function T(e, t, a, r) {
		var n = "vsaveroomimagejpg.php?" + k(e, t, a);
		return n += "&saveprefix=" + r
	}
	function k(e, t, a) {
		var r = Dt,
			n = "layers/",
			r = et(e.roomId);
		0 == a && 0 != t && (a = t / r.width * r.height), 0 == t && 0 != a && (t = a / r.height * r.width);
		var i = "width=" + t + "&height=" + a + "&path=" + n + "&base=" + r.id + ".JPEG",
			o = r.id + "/",
			l = new Array;
		for (var s in e.areas) {
			var c = s,
				u = e.areas[c],
				d = u.sku;
			if (null != d) if (null != tt(d)) {
				var h = "-" + u.rotation + "-" + u.pattern,
					p = u.grout;
				i += "&layers[]=" + o + r.id + "_" + c + "_Grout_" + p + "_tpG0.png";
				var g = Ke(d);
				i += "&layers[]=" + o + r.id + "_" + c + "_Tile_" + d + h + "_" + g + ".png"
			} else {
				var p = "FFFFFF";
				i += "&layers[]=" + o + r.id + "_" + c + "_Grout_" + p + "_tpG0.png"
			} else {
				var p = "FFFFFF";
				i += "&layers[]=" + o + r.id + "_" + c + "_Grout_" + p + "_tpG0.png"
			}
		}
		return i += "&" + uncache
	}
	function y(e, t, a) {
		var r = "layers/",
			n = et(e);
		(0 == t || 0 == a) && (t = n.width, a = n.height);
		for (var i = "width=" + t + "&height=" + a + "&path=" + r + "&base=" + n.id + ".JPEG", o = n.id + "/", l = new Array, s = 0; s < n.numAreas; ++s) {
			var c = "Area" + n.areas.split(",")[s],
				u = "FFFFFF";
			i += "&layers[]=" + o + n.id + "_" + c + "_Grout_" + u + "_tpG0.png"
		}
		return i += "&" + uncache
	}
	function S(e) {
		if (na = "Tile", null == e) Ht = !1;
		else {
			Wt = e, Ht = !0, qt = !1, Lt = !1;
			var t = "Click on a surface to change the pattern.";
			VUtils.isTabletOrPhoneDevice() && (t = "Tap on a surface to change the pattern."), it.roomContainsSingleTiles() && ("Herringbone" == Wt || "BlockHerringbone" == Wt ? t += "<br>Please note your single tiles will be removed." : "Diamond" == Wt && (t += "<br>Please note any non-square single tiles will be removed.")), R(t, 3e3)
		}
		N()
	}
	function x() {
		bt && (ta.savedThumbnailDataURL = nt(400, 300).toDataURL("image/jpeg", .5)), makingPredecoratedRooms && D(), aa.savedRoomsDecorateData.unshift(VUtils.clone(ta)), M(), B(), e.broadcastMessage("Saving"), R("Your room has now been saved.", 1500)
	}
	function R(e, t) {
		return null != la && (clearTimeout(la), la = null), null == e ? void $(".vit-message").hide() : ($(".vit-message img").hide(), $(".vit-message p").html(e), $(".vit-message").show(), void(void 0 != t && (la = setTimeout(function() {
			la = null, $(".vit-message").hide()
		}, t))))
	}
	function A(e, t) {
		return null != la && (clearTimeout(la), la = null), null == e ? (la = null, void $(".vit-message").hide()) : ($(".vit-message img").show(), $(".vit-message p").html(e), $(".vit-message").show(), void(void 0 != t && (la = setTimeout(function() {
			la = null, $(".vit-message").hide()
		}, t))))
	}
	function C(e) {
		return;
		var t = tt(e);
		"" != t.productDetailsLink ? window.open(t.productDetailsLink) : window.open("http://www.toppstiles.co.uk/product.asp?productid=" + t.id360)
	}
	function P(e) {
		return;
		if (makingPredecoratedRooms) return D(), void e();
		var t = "engine/room-styles-data.txt?" + uncache;
		VUtils.loadTextFromURL(t, function(t) {
			ra = JSON.parse(t), e()
		})
	}
	function D() {
		ra = new Object, ra.version = vt, ra.predecoratedRoomsDecorateData = VUtils.clone(aa.savedRoomsDecorateData), $("a.save-saved-rooms-to-disk").attr("href", "data:text/plain," + JSON.stringify(ra))
	}
	function I(e) {
		return;
		wt = e, da.setRoomStylesMode(e, Pt)
	}
	function O() {
		var e = fa.loadStorageData(ft);
		null != e && (aa = JSON.parse(e), aa.version != mt ? e = null : -1 != location.href.indexOf("resetvisualiser") && (e = null, alert("Resetting visualiser data"))), null == e && (aa = new Object, aa.version = mt, aa.savedRoomsDecorateData = new Array, M())
	}
	function M() {
		fa.saveStorageData(ft, JSON.stringify(aa))
	}
	function B() {
		return;
		var e = new Object;
		Tt.roomTypes = new Array;
		for (var t = 0; t < ut.roomTypes.length; ++t) {
			var a = new Object;
			a.typeText = ut.roomTypes[t].displayText, a.selected = !1, ut.roomTypes[t].type == Ct && (a.selected = !0), ut.roomTypes[t].type == Ct && (a.selected = !0), a.selectIdSelectRoomType = "SelectRoomType=" + ut.roomTypes[t].type, Tt.roomTypes.push(a)
		}
		Tt.predecoratedRoomStyles = new Array;
		for (var t = 0; t < ut.predecoratedRoomStyles.length; ++t) {
			null == Pt && (Pt = ut.predecoratedRoomStyles[t].style);
			var r = new Object;
			r.styleText = ut.predecoratedRoomStyles[t].displayText, r.selected = !1, ut.predecoratedRoomStyles[t].style == Pt && (r.selected = !0), r.selectIdSelectPredecoratedRoomStyle = "SelectPredecoratedRoomStyle=" + ut.predecoratedRoomStyles[t].style, Tt.predecoratedRoomStyles.push(r)
		}
		Tt.predecoratedRooms = new Array;
		for (var n = 1; n <= ra.predecoratedRoomsDecorateData.length; ++n) {
			for (var t = 0; t < ut.predecoratedRooms.length && ut.predecoratedRooms[t].index != n; ++t);
			if (t != ut.predecoratedRooms.length && Pt == ut.predecoratedRooms[t].style) {
				var i = new Object;
				i.savedRoom = !1, i.selected = !1, i.disabled = !1, i.thumbnail = m(ra.predecoratedRoomsDecorateData[t], 400, 300), bt && (i.thumbnail = ra.predecoratedRoomsDecorateData[t].savedThumbnailDataURL), i.selectIdSelectRoom = "SelectPredecoratedRoom=" + t, Tt.predecoratedRooms.push(i)
			}
		}
		if (Tt.rooms = new Array, Tt.isSavedRooms = !1, Tt.roomType = Ct, "Saved" == Ct) {
			Tt.isSavedRooms = !0;
			for (var t = 0; t < aa.savedRoomsDecorateData.length; ++t) {
				var i = new Object;
				i.savedRoom = !0, i.selected = !1, i.disabled = !1, i.thumbnail = m(aa.savedRoomsDecorateData[t], 400, 300), bt && "undefined" != typeof aa.savedRoomsDecorateData[t].savedThumbnailDataURL && (i.thumbnail = aa.savedRoomsDecorateData[t].savedThumbnailDataURL), i.selectIdSelectRoom = "SelectSavedRoom=" + t, i.selectIdDeleteRoom = "DeleteSavedRoom=" + t, Tt.rooms.push(i)
			}
		} else
		for (var t = 0; t < ut.rooms.length; ++t) if ("" == $.trim(ut.rooms[t].ignore) && ("*" == Ct || Ct == ut.rooms[t].type)) {
			var i = new Object;
			i.savedRoom = !1, i.selected = !1, ut.rooms[t].id == Dt.id && (i.selected = !0), i.thumbnail = v(ut.rooms[t].id, 400, 300), "y" == ut.rooms[t].hasThumbnail && (i.thumbnail = "thumbnails/rooms/" + ut.rooms[t].id + ".png"), i.disabled = !1, i.selectIdSelectRoom = "SelectStockRoom=" + ut.rooms[t].id, Tt.rooms.push(i)
		}
	}
	function Y() {
		return;
		Tt.tilesSearch = new Object, Tt.tilesSearch.string = Ot, Tt.tilesSearch.selectIdSearch = "Search", Tt.tilesType = new Object, Tt.tilesType.selectIdTilesType = "SelectTilesType";
		var e = U();
		Tt.tiles = new Array;
		for (var t = 0; t < e.tiles.length; ++t) {
			var a = e.tiles[t],
				r = new Object;
			r.nameText = a.name, r.skuText = a.sku, r.sizeText = a.displaySize, r.priceText = "&pound;" + a.price.toFixed(2), a.soldInBoxes ? r.priceText2 = "price/box" : r.priceText2 = "price/tile";
			var n = Ue(a).toFixed(2);
			r.priceM2Text = "&pound;" + n, a.isBorder && (r.priceM2Text = ""), r.thumbnail = gt + "thumbnails/tiles/" + a.sku + ".jpg?" + uncache, r.selected = !1, a.sku == $t && (r.selected = !0), r.disabled = !1, r.selectIdSelectTile = "SelectTile=" + a.sku, Tt.tiles.push(r)
		}
	}
	function F() {
		return;
		vout("updateGUIFiltersData()"), j(), Tt.selectIdApplyFilters = "ApplyFilters", Tt.filters = new Array, Tt.currentFilters = new Array;
		for (var e = 0; e < ut.filters.length; ++e) if (ut.filters[e].useFor == yt) {
			var t = new Object;
			t.titleText = ut.filters[e].filterTitle, t.items = new Array;
			for (var a = 0; a < ut.filters[e].filterValues.length; ++a) {
				var r = new Object;
				if (r.filterValueText = ut.filters[e].filterValues[a], r.buttonSizeClass = ut.filters[e].buttonSizeClass, r.selectIdFilter = "Filter=" + ut.filters[e].dataProperty + "," + a, Gt[ut.filters[e].dataProperty][a]) {
					r.state = "Selected";
					var n = new Object;
					n.filterValueText = r.filterValueText, n.selectIdDeleteFilter = "DeleteFilter=" + ut.filters[e].dataProperty + "," + a, Tt.currentFilters.push(n)
				} else 0 == Et[ut.filters[e].dataProperty][a] ? (r.state = "Disabled", r.selectIdFilter = "") : r.state = "Unselected";
				t.items.push(r)
			}
			Tt.filters.push(t)
		}
	}
	function G() {
		Tt.grout = new Array;
		for (var e = 0; e < ut.grout.length; ++e) {
			var t = ut.grout[e],
				a = new Object;
			a.name = t.name, a.colour = t.rgb, a.selected = !1, t.rgb == St && (a.selected = !0), a.disabled = !1, a.selectIdSelectGrout = "SelectGrout=" + t.rgb, Tt.grout.push(a)
		}
	}
	function E() {
		return;
		Tt.wallColours = new Array, Tt.cabinetColours = new Array, Tt.worktopColours = new Array;
		for (var e = 0; e < ut.colours.length; ++e) {
			var t = ut.colours[e].rgb,
				a = new Object;
			"Wall" == ut.colours[e].type ? (a.colour = t, a.selected = !1, t == xt && (a.selected = !0), a.disabled = !1, a.selectIdSelectColour = "SelectWallColour=" + t, Tt.wallColours.push(a)) : "Cabinet" == ut.colours[e].type ? (a.colour = t, a.selected = !1, t == Rt && (a.selected = !0), a.disabled = !1, a.selectIdSelectColour = "SelectCabinetColour=" + t, Tt.cabinetColours.push(a)) : (a.colour = t, a.selected = !1, t == At && (a.selected = !0), a.disabled = !1, a.selectIdSelectColour = "SelectWorktopColour=" + t, Tt.worktopColours.push(a))
		}
	}
	function W() {
		Tt.wishlist = new Array, Tt.wishlist.selectIdRefreshWishlist = "RefreshWishlist";
		for (var e = 0; e < Yt.length; ++e) {
			var t = tt(Yt[e]);
			if (null != t) {
				var a = new Object;
				a.nameText = t.name, a.codeText = t.sku, a.priceText = "£" + t.price.toFixed(2).replace(/\.?0+$/, ""), t.soldInBoxes ? a.priceText2 = "price/box" : a.priceText2 = "price/tile", a.thumbnail = gt + "thumbnails/tiles/" + t.sku + ".jpg?" + uncache, a.selectIdSelectTile = "SelectTile=" + t.sku, a.selectIdAddTileToBasketStart = "AddTileToBasketStart=" + t.sku, a.selectIdDeleteFromWishlist = "DeleteWishlistTile=" + t.sku, Tt.wishlist.push(a)
			}
		}
	}
	function L() {
		var e = 0;
		Tt.basket = new Object, Tt.basket.selectIdRefreshBasket = "RefreshBasket", Tt.basket.selectIdPay = "Pay", Tt.basket.items = new Array;
		for (var t = 0, a = 0; a < Ft.length; ++a) {
			var r = Ft[a],
				n = r.tile,
				i = new Object;
			if (i.nameText = n.name, i.codeText = n.sku, i.quantityText = r.tempQuantity, t += r.quantity, i.isSample = r.isSample, n.isBorder ? i.coverageText = "" : i.coverageText = parseFloat(r.tempCoverageM2).toFixed(2).replace(/\.?0+$/, ""), r.isSample) {
				i.itemPriceText = "&pound;" + n.samplePrice.toFixed(2);
				var o = (r.quantity * n.samplePrice).toFixed(2);
				i.totalPriceText = "&pound;" + o, e += r.quantity * n.samplePrice
			} else {
				i.itemPriceText = "&pound;" + n.price.toFixed(2);
				var o = (r.quantity * n.price).toFixed(2);
				i.totalPriceText = "&pound;" + o, e += r.quantity * n.price
			}
			i.thumbnail = gt + "thumbnails/tiles/" + n.sku + ".jpg?" + uncache, i.selectIdUpdateQuantity = "UpdateBasketItemQuantity=" + a, i.selectIdUpdateCoverage = "UpdateBasketItemCoverage=" + a, i.selectIdDeleteFromBasket = "DeleteBasketItem=" + a, i.selectIdRefresh = "RefreshBasketItem=" + a, Tt.basket.items.push(i)
		}
		Tt.basket.grandTotalText = "&pound;" + e.toFixed(2), Tt.basket.count = t
	}
	function q() {
		if (Tt.addToBasketPopup = null, Tt.addRangeToBasketPopup = null, null == Nt) {
			Tt.addRangeToBasketPopup = new Object, Tt.addRangeToBasketPopup.items = new Array;
			for (var e = 0; e < _t.length; ++e) {
				Tt.addRangeToBasketPopup.items.push(new Object), Tt.addRangeToBasketPopup.items[e].nameText = _t[e].name, Tt.addRangeToBasketPopup.items[e].thumbnailURL = gt + "thumbnails/tiles/" + _t[e].sku + ".jpg?" + uncache, Tt.addRangeToBasketPopup.items[e].enable = zt[e], Tt.addRangeToBasketPopup.items[e].quantity = Qt[e], Tt.addRangeToBasketPopup.items[e].coverage = parseFloat(Kt[e]).toFixed(2).replace(/\.?0+$/, ""), Tt.addRangeToBasketPopup.items[e].selectIdEnable = "UpdateAddTileRangeToBasketPopupEnable=" + e, Tt.addRangeToBasketPopup.items[e].selectIdUpdateQuantity = "UpdateAddTileRangeToBasketPopupQuantity=" + e, Tt.addRangeToBasketPopup.items[e].selectIdUpdateCoverage = "UpdateAddTileRangeToBasketPopupCoverage=" + e;
				var t = 0;
				null != _t[e] && (t = (Qt[e] * _t[e].price).toFixed(2)), Tt.addRangeToBasketPopup.items[e].price = "&pound;" + t, Tt.addRangeToBasketPopup.items[e].disable = !1;
				for (var a = !1, r = 0; r < Ft.length; ++r) if (Ft[r].tile.sku == _t[e].sku && Ft[r].isSample) {
					a = !0;
					break
				}
				a && (zt[e] = !1, Tt.addRangeToBasketPopup.items[e].disable = !0, Tt.addRangeToBasketPopup.items[e].enable = !1)
			}
			Tt.addRangeToBasketPopup.selectIdAddTileRangeToBasket = "AddTileRangeToBasket"
		} else {
			Tt.addToBasketPopup = new Object, Tt.addToBasketPopup.quantity = jt, It.isBorder ? Tt.addToBasketPopup.coverage = "" : Tt.addToBasketPopup.coverage = parseFloat(Zt).toFixed(2).replace(/\.?0+$/, ""), Tt.addToBasketPopup.selectIdUpdateQuantity = "UpdateAddTileToBasketPopupQuantity", Tt.addToBasketPopup.selectIdUpdateCoverage = "UpdateAddTileToBasketPopupCoverage", Tt.addToBasketPopup.selectIdAddTileToBasket = "AddTileToBasket";
			var t = 0;
			null != It && (t = (jt * It.price).toFixed(2)), Tt.addToBasketPopup.price = "&pound;" + t
		}
	}
	function H() {
		Tt.addSampleTileRangePopup = new Object, Tt.addSampleTileRangePopup.items = new Array;
		for (var e = 0; e < Jt.length; ++e) {
			Tt.addSampleTileRangePopup.items.push(new Object), Tt.addSampleTileRangePopup.items[e].nameText = Jt[e].name, Tt.addSampleTileRangePopup.items[e].thumbnailURL = gt + "thumbnails/tiles/" + Jt[e].sku + ".jpg?" + uncache, Tt.addSampleTileRangePopup.items[e].enable = ea[e], Tt.addSampleTileRangePopup.items[e].selectIdEnable = "UpdateAddSampleTileRangeToBasketPopupEnable=" + e, Tt.addSampleTileRangePopup.items[e].price = "&pound;" + Jt[e].samplePrice.toFixed(2), Tt.addSampleTileRangePopup.items[e].disable = !1, Tt.addSampleTileRangePopup.items[e].cantOrderSample = !1;
			var t = !1;
			if (Jt[e].canOrderSampleOnline) {
				for (var a = 0; a < Ft.length; ++a) if (Ft[a].tile.sku == Jt[e].sku) {
					t = !0;
					break
				}
			} else t = !0, Tt.addSampleTileRangePopup.items[e].cantOrderSample = !0;
			t && (ea[e] = !1, Tt.addSampleTileRangePopup.items[e].disable = !0, Tt.addSampleTileRangePopup.items[e].enable = !1)
		}
		Tt.addSampleTileRangePopup.selectIdAddSampleTileRangeToBasket = "AddSampleTileRangeToBasket"
	}
	function X() {
		Tt.tilingAsRangeOrSinglePopup = new Object, Tt.tilingAsRangeOrSinglePopup.selectIdSingle = "TilingAsRangeOrSinglePopupSetSingle", Tt.tilingAsRangeOrSinglePopup.selectIdAbort = "TilingAsRangeOrSinglePopupAbort", Tt.tilingAsRangePopup = new Object, Tt.tilingAsRangePopup.items = new Array;
		for (var e = 0; e < Xt.length; ++e) Tt.tilingAsRangePopup.items.push(new Object), Tt.tilingAsRangePopup.items[e].nameText = Xt[e].name, Tt.tilingAsRangePopup.items[e].thumbnailURL = gt + "thumbnails/tiles/" + Xt[e].sku + ".jpg?" + uncache, Tt.tilingAsRangePopup.items[e].enable = Ut[e], Tt.tilingAsRangePopup.items[e].percentage = Vt[e], Tt.tilingAsRangePopup.items[e].selectIdEnable = "UpdateTilingAsRangePopupEnable=" + e, Tt.tilingAsRangePopup.items[e].selectIdUpdatePercentage = "UpdateTilingAsRangePopupPercentage=" + e;
		Tt.tilingAsRangePopup.selectIdFinished = "TilingAsRangePopupFinished", Tt.tilingAsRangePopup.selectIdAbort = "TilingAsRangePopupAbort"
	}
	function U() {
		vout("getFilteredProducts()");
		var e = new Object;
		e.tiles = new Array;
		for (var t = new Array, a = 0; a < ut.filters.length; ++a) if (t.push(!0), ut.filters[a].useFor == yt) for (var r = 0; r < Gt[ut.filters[a].dataProperty].length; ++r) if (Gt[ut.filters[a].dataProperty][r]) {
			t[a] = !1;
			break
		}
		for (var n = Ot.replace(/^\s+|\s+$/gm, ""), a = 0; a < ut.tiles.length; ++a) {
			var i = ut.tiles[a];
			switch (yt) {
			case "Tiles":
				if (i.isBorder) continue;
				if ("Wood" == i.is) continue;
				break;
			case "Mosaics":
				if (i.isBorder) continue;
				if (-1 == i.typeFilter.indexOf(",Mosaic Tiles,")) continue;
				break;
			case "Natural Stone":
				if (i.isBorder) continue;
				if (-1 == i.material.indexOf(",Natural Stone,")) continue;
				break;
			case "Borders":
				i.isBorder && e.tiles.push(i);
				continue;
				break;
			case "Wood Flooring":
				if (i.isBorder) continue;
				"Wood" == i.is && e.tiles.push(i);
				continue
			}
			if ("" == n || null == Mt || -1 != Mt.indexOf(i.sku)) {
				for (var o = 0, r = 0; r < ut.filters.length; ++r) for (var l = ut.filters[r].dataProperty, s = 0; s < Gt[l].length; ++s) if (t[r] || Gt[l][s] && "" != i[l] && -1 != i[l].indexOf("," + ut.filters[r].filterValues[s] + ",")) {
					++o;
					break
				}
				o == ut.filters.length && e.tiles.push(i)
			}
		}
		return e
	}
	function V(e) {
		return;
		if ("DEV" == runningEnvironment || "TEST" == runningEnvironment) {
			var t = Ot.replace(/^\s+|\s+$/gm, "");
			Mt = new Array;
			for (var a = 0; a < ut.tiles.length; ++a) {
				var r = ut.tiles[a],
					n = r.sku + " " + r.name + " " + r.material + " " + r.colour + " " + r.finish + " " + r.shape,
					i = new RegExp("\\b" + t, "gi");
				null != n.match(i) && Mt.push(r.sku)
			}
			return void e()
		}
		var t = Ot.replace(/^\s+|\s+$/gm, ""),
			o = "http://www.toppstiles.co.uk/search/search_box_visualiser.php?search_phrase=" + t;
		VUtils.loadTextFromURL(o, function(t) {
			Mt = new Array;
			for (var a = t.split("|"), r = 0; r < a.length; ++r) {
				var n = at(a[r]);
				null != n && Mt.push(n.sku)
			}
			e()
		})
	}
	function N() {
		return;
		var e = !1;
		if (null != ta && (e = it.isRoomDecorated()), Tt.tools = new Object, Tt.tools.selectIdCreateArea = "CreateZone", null == It) Tt.tools.selectedTileThumbnail = null, Tt.tools.selectedTileName = "", Tt.tools.selectedColour = "FFFFFF";
		else {
			if (null != Xt) {
				for (var t = "", a = rt(It.sku), r = 0; r < a.length; ++r) for (var n = 0; n < Xt.length; ++n) Ut[n] && Xt[n].sku == a[r] && ("" != t && (t += "-"), t += Xt[n].sku);
				Tt.tools.selectedTileThumbnail = gt + "thumbnails/tiles/" + t + ".jpg?" + uncache
			} else Tt.tools.selectedTileThumbnail = gt + "thumbnails/tiles/" + It.sku + ".jpg?" + uncache;
			Tt.tools.selectedTileName = It.name, Tt.tools.selectedColour = null;
			var i = null;
			"Grout" == na && (i = St), "WallColour" == na ? i = xt : "CabinetColour" == na ? i = Rt : "WorktopColour" == na && (i = At), null != i && (Tt.tools.selectedTileThumbnail = null, Tt.tools.selectedColour = i, Tt.tools.selectedTileName = "");
		}
		if (Tt.tools.orderSampleEnabled = !1, null != It) {
			var a = rt(It.sku);
			if (null == Xt || null == a) {
				if (It.canOrderSampleOnline) {
					for (var o = !1, r = 0; r < Ft.length; ++r) if (Ft[r].tile.sku == It.sku) {
						o = !0;
						break
					}
					o || (Tt.tools.orderSampleEnabled = !0, Tt.tools.selectIdOrderSample = "OrderSample=" + It.sku)
				}
			} else {
				for (var l = !1, r = 0; r < a.length; ++r) {
					var s = tt(a[r]);
					if (null != s && s.canOrderSampleOnline) {
						for (var o = !1, n = 0; n < Ft.length; ++n) if (Ft[n].tile.sku == s.sku) {
							o = !0;
							break
						}
						if (!o) {
							l = !0;
							break
						}
					}
				}
				l && (Tt.tools.orderSampleEnabled = !0, Tt.tools.selectIdOrderSample = "OrderSample=" + It.sku)
			}
		}
		if (Tt.tools.addToBasketEnabled = !1, null != It) {
			var a = rt(It.sku);
			if (null == Xt || null == a) {
				for (var c = !1, r = 0; r < Ft.length; ++r) if (Ft[r].tile.sku == It.sku && Ft[r].isSample) {
					c = !0;
					break
				}
				c || (Tt.tools.selectIdAddTileToBasketStart = "AddTileToBasketStart=" + It.sku, Tt.tools.addToBasketEnabled = !0)
			} else {
				for (var u = !1, r = 0; r < a.length; ++r) {
					var s = tt(a[r]);
					if (null != s) var c = !1;
					for (var n = 0; n < Ft.length; ++n) if (Ft[n].tile.sku == s.sku && Ft[n].isSample) {
						c = !0;
						break
					}
					if (!c) {
						u = !0;
						break
					}
				}
				u && (Tt.tools.selectIdAddTileToBasketStart = "AddTileToBasketStart=" + It.sku, Tt.tools.addToBasketEnabled = !0)
			}
		}
		if (Tt.tools.undoChangesEnabled = !1, it.anythingToUndo() && (Tt.tools.undoChangesEnabled = !0, Tt.tools.selectIdUndoChanges = "UndoChanges"), Tt.tools.redoChangesEnabled = !1, it.anythingToRedo() && (Tt.tools.redoChangesEnabled = !0, Tt.tools.selectIdRedoChanges = "RedoChanges"), Tt.tools.clearAllChangesEnabled = !1, it.anythingToUndo() && (Tt.tools.clearAllChangesEnabled = !0, Tt.tools.selectIdClearAllChanges = "ClearAllChanges"), Tt.tools.saveRoomEnabled = !1, e && (Tt.tools.saveRoomEnabled = !0, Tt.tools.selectIdSaveRoom = "SaveRoom"), Tt.tools.addToWishlistEnabled = !1, null != It) {
			Tt.tools.selectIdAddToWishlist = "AddTileToWishlist=" + It.sku, Tt.tools.addToWishlistEnabled = !0;
			for (var r = 0; r < Yt.length; ++r) if (Yt[r] == It.sku) {
				Tt.tools.addToWishlistEnabled = !1;
				break
			}
		}
		Tt.tools.productDetailsEnabled = !1, null != It && (Tt.tools.selectIdProductDetails = "ProductDetails=" + It.sku, Tt.tools.productDetailsEnabled = !0), Tt.tools.rotateProductEnabled = !1, Tt.tools.rotateProductSelected = !1, null != It && "Tile" == na && (Tt.tools.rotateProductEnabled = !0, Tt.tools.rotateProductSelected = qt, Tt.tools.selectIdRotateProduct = "RotateProductToggle"), Tt.tools.changePatternEnabled = !1, Tt.tools.changePatternSelected = !1, null != It && "Tile" == na && (Tt.tools.changePatternEnabled = !0, Tt.tools.selectIdChangePattern = "ChangePattern", Tt.tools.currentPattern = Wt, Ht && (Tt.tools.changePatternSelected = !0)), Tt.tools.singleTileEnabled = !1, Tt.tools.singleTileSelected = !1, null != It && "Tile" == na && (-1 != It.size.indexOf("Modular Tiles") || "Wood" == It.is || null != Xt || It.noSingleTile || (Tt.tools.singleTileEnabled = !0, Tt.tools.singleTileSelected = Lt, Tt.tools.selectIdSingleTile = "SingleTileToggle")), Tt.tools.shareRoomEnabled = !1, e && (Tt.tools.shareRoomEnabled = !0, Tt.tools.selectIdPrepareShareRoom = "PrepareShareRoom", Tt.tools.selectIdShareRoom = "ShareRoom", Tt.tools.selectIdEmailRoom = "EmailRoom"), Tt.tools.printRoomEnabled = !1, e && (Tt.tools.printRoomEnabled = !0, Tt.tools.selectIdPrintRoom = "PrintRoom")
	}
	function j() {
		return;
		for (var e = new Array, t = 0; t < ut.filters.length; ++t) if (e.push(!0), ut.filters[t].useFor == yt) for (var a = 0; a < Gt[ut.filters[t].dataProperty].length; ++a) if (Gt[ut.filters[t].dataProperty][a]) {
			e[t] = !1;
			break
		}
		for (var t = 0; t < ut.filters.length; ++t) for (var a = 0; a < Gt[ut.filters[t].dataProperty].length; ++a) Et[ut.filters[t].dataProperty][a] = 0;
		for (var t = 0; t < ut.tiles.length; ++t) for (var r = ut.tiles[t], a = 0; a < ut.filters.length; ++a) {
			for (var n = 0, i = 0; i < ut.filters.length; ++i) if (i != a) for (var o = ut.filters[i].dataProperty, l = 0; l < Gt[o].length; ++l) if (e[i] || Gt[o][l] && "" != r[o] && -1 != r[o].indexOf("," + ut.filters[i].filterValues[l] + ",")) {
				++n;
				break
			}
			if (n == ut.filters.length - 1) for (var o = ut.filters[a].dataProperty, l = 0; l < Gt[o].length; ++l) - 1 != r[o].indexOf("," + ut.filters[a].filterValues[l] + ",") && ++Et[o][l]
		}
	}
	function Z(e, t, a, r) {
		var n = new Object,
			i = e.indexOf("=");
		if (-1 == i) n.type = e, n.data = new Array;
		else
		for (n.type = e.substring(0, i), n.data = new Array; i < e.length - 1;) {
			var o = e.indexOf(",", i + 1); - 1 == o && (o = e.length), n.data.push(e.substring(i + 1, o)), i = o
		}
		return void 0 != t && (n.data.push(t), void 0 != a && (n.data.push(a), void 0 != r && n.data.push(r))), n
	}
	function _(t, a) {
		e.broadcastMessage("LoadingRoom"), I(!1), A("Loading..."), Lt = !1, Wt = "Brick", Wt = "Linear";
		for (var r = 0; r < ut.rooms.length; ++r) if (ut.rooms[r].id == t) {
			Dt = ut.rooms[r];
			break
		}
		if (it.newRoomLoading(), B(), N(), Y(), bt) {
			var n = "scenes/" + Dt.id + "_Griddata.SVG?" + Math.random();
			pa.loadSVGFromURL(n, function() {
				it.roomLoaded(!0), f(), da.updateRoomRender(function() {
					K(a)
				})
			})
		} else da.updateRoomRender(function() {
			K(a)
		})
	}
	function z(t, a) {
		e.broadcastMessage("LoadingRoom"), I(!1), A("Loading..."), Lt = !1, Wt = "Brick";
		for (var r = 0; r < ut.rooms.length; ++r) if (ut.rooms[r].id == aa.savedRoomsDecorateData[t].roomId) {
			Dt = ut.rooms[r];
			break
		}
		if (it.newRoomLoading(), B(), N(), B(), bt) {
			var n = "scenes/" + Dt.id + "_Griddata.SVG?" + Math.random();
			pa.loadSVGFromURL(n, function() {
				ta = VUtils.clone(aa.savedRoomsDecorateData[t]), it.roomLoaded(!1), f(), it.setInitialDecoration(), da.updateRoomRender(function() {
					K(a)
				})
			})
		} else da.updateRoomRender(function() {
			K(a)
		})
	}
	function Q(e, t) {
		A("Loading..."), I(!1), Lt = !1, Wt = "Brick";
		for (var a = 0; a < ut.rooms.length; ++a) if (ut.rooms[a].id == ra.predecoratedRoomsDecorateData[e].roomId) {
			Dt = ut.rooms[a];
			break
		}
		if (it.newRoomLoading(), B(), N(), B(), bt) {
			var r = "scenes/" + Dt.id + "_Griddata.SVG?" + Math.random();
			pa.loadSVGFromURL(r, function() {
				ta = VUtils.clone(ra.predecoratedRoomsDecorateData[e]), it.roomLoaded(!1), f(), it.setInitialDecoration(), da.updateRoomRender(function() {
					K(t), I(!0)
				})
			})
		} else da.updateRoomRender(function() {
			K(t)
		})
	}
	function K(e) {
		return void(void 0 != e && e());
		setTimeout(function() {
			var t = 0;
			switch (Dt.initialView) {
			case "Middle":
				t = $(".scene")[0].scrollHeight / 2 - $(".scene").height() / 2;
				break;
			case "Bottom":
				t = $(".scene")[0].scrollHeight
			}
			$(".scene").scrollTop(t), void 0 != e && e()
		}, 1)
	}
	function J(e) {
		aa.savedRoomsDecorateData.splice(e, 1), M(), B()
	}
	function ee(e) {
		var t = Dt.id.replace("Room", "Room ");
		t += " " + e.replace("Area", "Area ");
		for (var a = 0; a < ut.tileAreas.length; ++a) {
			var r = ut.tileAreas[a];
			if (-1 != r.id.indexOf(t) && -1 != r.gridName.toLowerCase().indexOf("floor")) return "Floor"
		}
		return "Wall"
	}
	function te(e, t) {
		for (var a = new Array, r = et(e.roomId), n = 0; n < r.tileAreaIds.length; ++n) for (var i = 0; i < ut.tileAreas.length; ++i) {
			var o = ut.tileAreas[i];
			if (o.id == r.tileAreaIds[n] && pa.findGridIndexWithName(o.gridName) == t) {
				var l = new Object;
				l.decorateAreaData = e.areas[o.areaName], l.tileArea = o, a.push(l)
			}
		}
		return a
	}
	function ae(e) {
		for (var t = null, a = new Array, r = et(ta.roomId), n = 0; n < r.tileAreaIds.length; ++n) for (var i = 0; i < ut.tileAreas.length; ++i) {
			var o = ut.tileAreas[i];
			if (o.id == r.tileAreaIds[n] && pa.findGridIndexWithName(o.gridName) == e) {
				var l = new Object;
				l.decorateAreaData = decorateData.areas[o.areaName], l.tileArea = o, a.push(l)
			}
		}
		return a
	}
	function re(e) {
		it.getWebGLRoomRenderCanvas(e)
	}
	function ne(e, t, a, r) {
		var n = {
			base64Data: e.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, ""),
			folder: t,
			filename: a
		};
		$.post("vsavebase64.php", n, function(e) {
			null != r && r()
		})
	}
	function ie(e) {
		na = "Tile", $t = e, It = tt(e), qt = !1, Ht = !1, It.noSingleTile && (Lt = !1), "Wood" == It.is && (Lt = !1), -1 != It.size.indexOf("Modular Tiles") && (Lt = !1), Xt = null, Ut = null, Vt = null;
		var t = rt(It.sku);
		if (null != t) {
			Xt = new Array, Vt = new Array, Ut = new Array, Xt.push(It), Vt.push(100), Ut.push(!0);
			for (var a = 0; a < t.length; ++a) t[a] != It.sku && (Xt.push(tt(t[a])), Vt.push(0), Ut.push(!1));
			X()
		}
		return Y(), N(), null != t ? !0 : !1
	}
	function oe(e) {
		na = "Grout", St = e, qt = !1, Ht = !1, Lt = !1, G(), N()
	}
	function le(e) {
		na = "WallColour", xt = e, qt = !1, Ht = !1, Lt = !1, E(), N()
	}
	function se(e) {
		na = "CabinetColour", Rt = e, qt = !1, Ht = !1, Lt = !1, E(), N()
	}
	function ce(e) {
		na = "WorktopColour", At = e, qt = !1, Ht = !1, Lt = !1, E(), N()
	}
	function ue(e) {
		vout("setCurTilesType(): " + e), yt = e, F(), Y()
	}
	function de(e, t) {
		Gt[e][t] ? Gt[e][t] = !1 : Gt[e][t] = !0, F()
	}
	function he(e, t) {
		Gt[e][t] = !1, F(), Y()
	}
	function pe() {
		Y()
	}
	function ge(e, t) {
		function a() {
			++Bt;
			var e = Bt;
			V(function() {
				Bt == e && (F(), Y(), t())
			})
		}
		Ot = e;
		var r = 2e3;
		null != sa && clearTimeout(sa), sa = setTimeout(function() {
			sa = null, a()
		}, r)
	}
	function fe(e) {
		R("This item has been added to your wishlist.", 1500), o(function() {
			-1 == Yt.indexOf(e) && Yt.push(e), l(), W(), N()
		})
	}
	function me(e) {
		o(function() {
			for (var t = 0; t < Yt.length; ++t) if (Yt[t] == e) {
				Yt.splice(t, 1);
				break
			}
			l(), W(), N()
		})
	}
	function ve() {
		o()
	}
	function be() {
		for (var e = 0; e < Ft.length; ++e) {
			var t = Ft[e];
			t.tempQuantity = t.quantity, t.tempCoverageM2 = He(t.tile, t.tempQuantity)
		}
		i()
	}
	function Te() {
		return;
		window.open("http://www.toppstiles.co.uk/e360/s_basket_view_basket.asp")
	}
	function ke() {
		if (Jt = null, null == It) return !1;
		var e = rt(It.sku);
		if (null != Xt && null != e) {
			Jt = new Array, ea = new Array;
			for (var t = 0; t < Xt.length; ++t) Jt.push(Xt[t]), ea.push(Ut[t]);
			return H(), !0
		}
		for (var t = 0; t < Ft.length; ++t) Ft[t].tile.sku == It.sku && (Ft[t].isSample || R("This product is already in the basket.", 1500));
		var a = new Object;
		return a.tile = It, a.isSample = !0, a.quantity = 1, a.tempQuantity = a.quantity, a.tempCoverageM2 = He(It, a.tempQuantity), Ft.push(a), R("A sample has been added to your basket.", 1500), n(It, -999999, function() {
			L(), N(), da.update()
		}), !1
	}
	function we() {
		for (var e = !1, t = new Array, a = new Array, n = 0, i = 0; i < Jt.length; ++i) if (ea[i]) {
			for (var o = !1, l = 0; l < Ft.length; ++l) if (Ft[l].tile.sku == Jt[i].sku && !Ft[l].isSample) {
				o = !0;
				break
			}
			if (!o) {
				e = !0, ++n;
				var s = new Object;
				s.tile = Jt[i], s.isSample = !0, s.quantity = 1, s.tempQuantity = s.quantity, s.tempCoverageM2 = He(Jt[i], s.tempQuantity), Ft.push(s), t.push(Jt[i]), a.push(-999999)
			}
		}
		n > 0 && r(t, a, function() {
			L(), N(), da.update()
		}), e ? R("Sample(s) have been added to your basket.", 1500) : R("These product(s) are already in the basket.", 1500), 0 == n && (L(), N(), da.update())
	}
	function ye(e) {
		Nt = null, _t = null;
		var t = rt(e);
		if (null != Xt && null != t) {
			_t = new Array, zt = new Array, Qt = new Array, Kt = new Array;
			for (var a = 0; a < Xt.length; ++a) _t.push(Xt[a]), zt.push(Ut[a]), Qt.push(1), Kt.push(He(tt(t[a]), 1))
		} else Nt = tt(e), jt = 1, Zt = He(Nt, jt);
		q()
	}
	function $e() {
		var e = parseInt(jt);
		if (isNaN(e)) return R("Invalid quantity.", 1500), !1;
		if (0 == e) return R("Quantity must not be zero.", 1500), !1;
		R("The item has been added to your basket.", 1500);
		for (var t = 0; t < Ft.length; ++t) if (Ft[t].tile.sku == Nt.sku) return Ft[t].quantity += parseInt(jt), Ft[t].tempQuantity = Ft[t].quantity, Ft[t].tempCoverageM2 = He(Ft[t].tile, Ft[t].tempQuantity), L(), N(), !0;
		var a = new Object;
		return a.tile = Nt, a.isSample = !1, a.quantity = parseInt(jt), a.tempQuantity = a.quantity, a.tempCoverageM2 = He(Nt, a.tempQuantity), Ft.push(a), n(Nt, a.quantity, function() {
			L(), N(), da.update()
		}), !0
	}
	function Se() {
		for (var e = 0; e < _t.length; ++e) {
			var t = parseInt(Qt[e]);
			if (isNaN(t)) return R("Invalid quantity.", 1500), !1;
			if (0 == t) return R("Quantity must not be zero.", 1500), !1
		}
		for (var a = !1, n = new Array, i = new Array, o = !1, l = 0, e = 0; e < _t.length; ++e) if (zt[e] && 0 != Qt[e]) {
			o = !0;
			for (var s = !1, c = 0; c < Ft.length; ++c) Ft[c].tile.sku == _t[e].sku && (Ft[c].quantity += parseInt(Qt[e]), Ft[c].tempQuantity = Ft[c].quantity, Ft[c].tempCoverageM2 = He(Ft[c].tile, Ft[c].tempQuantity), s = !0);
			if (!s) {
				++l;
				var u = new Object;
				u.tile = _t[e], u.isSample = !1, u.quantity = parseInt(Qt[e]), u.tempQuantity = u.quantity, u.tempCoverageM2 = He(_t[e], u.tempQuantity), Ft.push(u), n.push(_t[e]), i.push(u.quantity)
			}
		}
		return l > 0 && r(n, i, function() {
			L(), N(), da.update()
		}), o && R("The item(s) have been added to your basket.", 1500), 0 == l && (L(), N(), da.update()), !0
	}
	function xe(e) {
		n(Ft[e].tile, -Ft[e].mainSiteQuantity, function() {
			Ft.splice(e, 1), L(), N(), da.update()
		})
	}
	function Re(e) {
		e = parseInt(e);
		var t = parseInt(Ft[e].tempQuantity);
		return isNaN(t) ? void R("Invalid quantity.", 1500) : 0 == t ? void R("Quantity must not be zero.", 1500) : Ft[e].isSample ? void(1 != t && (Ft[e].quantity = 1, Ft[e].tempQuantity = 1, L(), R("You can only order one sample tile.", 1500))) : (Ft[e].quantity = Ft[e].tempQuantity, n(Ft[e].tile, Ft[e].quantity), R("Your basket has been updated.", 1500), L(), void N())
	}
	function Ae(e, t) {
		t = parseInt(t), Ft[parseInt(e)].tempQuantity = t, isNaN(t) ? Ft[parseInt(e)].tempCoverageM2 = 0 : Ft[parseInt(e)].tempCoverageM2 = He(Ft[parseInt(e)].tile, t), L()
	}
	function Ce(e, t) {
		if (t = parseFloat(t), Ft[parseInt(e)].tempCoverageM2 = t, isNaN(t)) Ft[parseInt(e)].tempQuantity = 0;
		else {
			var a = Xe(Ft[parseInt(e)].tile, t);
			Ft[parseInt(e)].tempQuantity = parseInt(a)
		}
		L()
	}
	function Pe(e) {
		e = parseInt(e), jt = e, isNaN(e) ? (jt = 0, Zt = 0) : Zt = He(Nt, e), q()
	}
	function De(e) {
		e = parseFloat(e), Zt = e, jt = isNaN(e) ? 0 : parseInt(Xe(Nt, e)), q()
	}
	function Ie(e) {
		zt[e] = !zt[e], q()
	}
	function Oe(e, t) {
		t = parseInt(t), Qt[e] = t, isNaN(t) ? (Qt[e] = 0, Kt[e] = 0) : Kt[e] = He(_t[e], t), q()
	}
	function Me(e, t) {
		t = parseFloat(t), Kt[e] = t, isNaN(t) ? Qt[e] = 0 : Qt[e] = parseInt(Xe(_t[e], t)), q()
	}
	function Be(e) {
		ea[e] = !ea[e], H()
	}
	function Ye(e) {
		Ut[e] = !Ut[e];
		for (var t = 0, a = 0; a < Xt.length; ++a) Ut[a] && ++t;
		for (var a = 0; a < Xt.length; ++a) Ut[a] && 0 != t ? Vt[a] = parseInt(100 / t) : Vt[a] = 0;
		var r = 100 - t * parseInt(100 / t);
		if (0 != r) for (var a = 0; a < Xt.length && (!Ut[a] || (++Vt[a], --r, 0 != r)); ++a);
		X()
	}
	function Fe(e, t) {
		return t = parseInt(t), isNaN(t) && (t = 0), Vt[e] = t, X(), qe()
	}
	function Ge() {
		for (var e = 0, t, a = 0; a < Xt.length; ++a) Ut[a] && (++e, t = Xt[a]);
		1 == e ? (Xt = null, It = t) : Lt = !1, N()
	}
	function Ee() {
		Xt = null
	}
	function We() {
		Xt = null, N()
	}
	function Le() {
		Xt = null
	}
	function qe() {
		for (var e = null, t = 0, a = 0; a < Xt.length; ++a) if (Ut[a]) {
			if (0 == Vt[a]) return "Percentage must not be zero";
			if (Vt[a] > 100) return "Percentages must not be over 100";
			t += Vt[a]
		}
		return 100 != t ? "Your percentage mix of tiles must total 100%" : null
	}
	function He(e, t) {
		var a = t * (e.widthCM / 100) * (e.heightCM / 100);
		return 0 != e.packCoverageOverride ? a = t * e.packCoverageOverride : e.soldInBoxes && (a *= e.numberInBox), a = a.toFixed(4), a = a.replace(/\.?0+$/, "")
	}
	function Xe(e, t) {
		var a = e.widthCM / 100 * (e.heightCM / 100);
		e.soldInBoxes && (a *= e.numberInBox), 0 != e.packCoverageOverride && (a = e.packCoverageOverride);
		var r = Math.ceil(t / a);
		return r
	}
	function Ue(e) {
		var t = 1,
			a = e.widthCM / 100 * (e.heightCM / 100);
		e.soldInBoxes && (a *= e.numberInBox), 0 != e.packCoverageOverride && (a = e.packCoverageOverride);
		var r = t / a;
		return r * e.price
	}
	function Ve() {
		it.doAddZone()
	}
	function Ne() {
		qt = !qt, qt && (VUtils.isTabletOrPhoneDevice() ? R("Tap on a surface to rotate the pattern. To change more than one surface tap ‘Rotate Pattern’ each time.", 3e3) : R("Click on a surface to rotate the pattern. To change more than one surface click ‘Rotate Pattern’ each time.", 3e3)), Ht = !1, Lt = !1, N()
	}
	function je() {
		Lt = !Lt, qt = !1, Ht = !1, N()
	}
	function Ze() {
		_e(), Tt = new Object, ot && (fe("631789"), fe("811490"), fe("811627"), fe("630089"), fe("811639"));
		var e = VUtils.GetQueryStringParam("sku");
		null != e && null != tt(e) && ie(e), Y(), G(), E(), F(), L(), N()
	}
	function _e() {
		return;
		Gt = new Object, Et = new Object;
		for (var e = 0; e < ut.filters.length; ++e) {
			Gt[ut.filters[e].dataProperty] = new Array, Et[ut.filters[e].dataProperty] = new Array;
			for (var t = 0; t < ut.filters[e].filterValues.length; ++t) Gt[ut.filters[e].dataProperty].push(!1), Et[ut.filters[e].dataProperty].push(0)
		}
	}
	function ze(e) {
		return;
		if (bt) {
			ut.rooms = ut.webGLRooms, ut.tileAreas = ut.webGLTileAreas;
			for (var t = 0; t < ut.colours.length; ++t) ut.colours[t].rgb = VUtils.convertRGBToHex(ut.colours[t].rgb.split(",")[0], ut.colours[t].rgb.split(",")[1], ut.colours[t].rgb.split(",")[2])
		}
		vout("setupDatabase(): Start"), skuEntries = new Object;
		for (var t = 0; t < ut.processedTiles.length; ++t)"-" != ut.processedTiles[t].sku && "" == $.trim(ut.processedTiles[t].ignore) && (skuEntries[ut.processedTiles[t].sku] = t);
		vout("setupDatabase(): Finish 0");
		var a = new Array;
		$xml = $(e);
		var r = 0;
		if ($xml.find("item").each(function(e) {
			++r;
			var t = new Object,
				n = $("ToppsSKU", this).text(),
				i = !1;
			if ("corner" == $("Tile_Sort", this).text().toLowerCase() && (i = !0), !i) {
				var o = skuEntries[n];
				if (void 0 != o) {
					if (t.testSubset = ut.processedTiles[o].testSubset, t.rangeSKUs = ut.processedTiles[o].rangeSKUs, t.productDetailsLink = ut.processedTiles[o].productDetailsLink, t.noSingleTile = !1, "" != ut.processedTiles[o].noSingleTile && (t.noSingleTile = !0), t.sortOrder = parseInt($("visualizer_order", this).text()), t.ignore = ut.processedTiles[o].ignore, t.patternsAllowed = "," + ut.processedTiles[o].patternsAllowed + ",", t.is = "Tile", "Tile" != $("type", this).text() && (t.is = "Wood"), t.sku = n, t.id360 = $("id360", this).text(), t.name = $("title", this).text(), t.widthCM = parseFloat($("width", this).text()), t.heightCM = parseFloat($("height", this).text()), t.displaySize = $("width", this).text() + "cm x " + $("height", this).text() + "cm", t.canGo = "", -1 != $("Tile_Type", this).text().toLowerCase().indexOf("wall") && -1 != $("Tile_Type", this).text().toLowerCase().indexOf("floor") ? t.canGo = "Both" : -1 != $("Tile_Type", this).text().toLowerCase().indexOf("wall") ? t.canGo = "Wall" : -1 != $("Tile_Type", this).text().toLowerCase().indexOf("floor") && (t.canGo = "Floor"), -1 != location.href.indexOf("testsubset") && "" != t.testSubset && (t.canGo = "Both"), t.typeFilter = ",", -1 != $("Tile_Type", this).text().toLowerCase().indexOf("wall") && (t.typeFilter += "Wall Tiles,"), -1 != $("Tile_Type", this).text().toLowerCase().indexOf("floor") && (t.typeFilter += "Floor Tiles,"), -1 != $("Tile_Suitability", this).text().toLowerCase().indexOf("outdoor") && (t.typeFilter += "Suitable For Outdoor,"), -1 != $("Tile_Sort", this).text().toLowerCase().indexOf("mosaic") && (t.typeFilter += "Mosaic Tiles,"), -1 != $("Tile_Sort", this).text().toLowerCase().indexOf("border") && (t.typeFilter += "Borders,"), -1 != $("Tile_Sort", this).text().toLowerCase().indexOf("decor") && (t.typeFilter += "Decors,"), t.isBorder = !1, "border" == $("Tile_Sort", this).text().toLowerCase() && (t.isBorder = !0), t.type = $("Tile_Sort", this).text(), t.width = Math.max(t.widthCM, t.heightCM) * ht, t.height = Math.min(t.widthCM, t.heightCM) * ht, t.smallMosaicsW = 1, t.smallMosaicsH = 1, "Mosaic" == t.type && (t.width = t.widthCM * ht, t.height = t.heightCM * ht, t.smallMosaicsW = parseInt(ut.processedTiles[o].numSmallMosaics.split(",")[0]), t.smallMosaicsH = parseInt(ut.processedTiles[o].numSmallMosaics.split(",")[1]), "" != ut.processedTiles[o].mosaicsMultiplier ? (t.mosaicsMultiplierW = ut.processedTiles[o].mosaicsMultiplier.split(",")[0], t.mosaicsMultiplierH = ut.processedTiles[o].mosaicsMultiplier.split(",")[1]) : (t.mosaicsMultiplierW = 1, t.mosaicsMultiplierH = 1)), t.size = "," + $("Size", this).text() + ",", t.material = "," + $("Tile_Material", this).text() + ",", t.colour = "," + $("Colour", this).text() + ",", t.shape = "," + $("Tile_Shape", this).text() + ",", ",," == t.shape && (t.shape = ""), t.finish = "," + $("Tile_Finish", this).text() + ",", t.mosaicFilter = ",", "Mosaic" == t.type) {
						-1 != t.material.indexOf(",Natural Stone,") && (t.mosaicFilter += "Natural Stone Mosaics,"), (-1 != t.colour.indexOf(",White,") || -1 != t.colour.indexOf(",Silver,")) && (t.mosaicFilter += "White & Silver Mosaics,"), (-1 != t.colour.indexOf(",Black,") || -1 != t.colour.indexOf(",White,") || -1 != t.colour.indexOf(",Grey,")) && (t.mosaicFilter += "Black&#44; White & Grey Mosaics,");
						for (var l = t.colour.split(","), s = 0; s < l.length; ++s) if ("" != l[s]) {
							var c = "," + l[s] + ",";
							if (",Black," != c && ",White," != c && ",Grey," != c && ",Beige," != c && ",Cream," != c && ",Ivory," != c && ",Pearl," != c) {
								t.mosaicFilter += ",Coloured Mosaics,";
								break
							}
						} - 1 != ("," + $("Collection", this).text() + ",").indexOf("Neutrals") && (t.mosaicFilter += "Neutral Mosaics,")
					}
					if (t.naturalStoneFilter = ",", -1 != t.material.indexOf(",Natural Stone,")) {
						t.naturalStoneFilter = t.material;
						var u = ["Natural Stone", "Glass", "Porcelain"];
						for (s = 0; s < u.length; ++s) do t.naturalStoneFilter = t.naturalStoneFilter.replace("," + u[s], ",");
						while (-1 != t.naturalStoneFilter.indexOf("," + u[s] + ",")); - 1 != t.finish.indexOf("Splitface") && (t.naturalStoneFilter += "Split Face Mosaics,"), -1 != ("," + $("Collection", this).text() + ",").indexOf("Flagstones") && (t.naturalStoneFilter += "Flagstones,")
					}
					t.price = parseFloat($("price", this).text()), t.soldInBoxes = !1, t.numberInBox = 0, "0" != $("soldinboxes", this).text() && (t.soldInBoxes = !0, t.numberInBox = parseInt($("numberinbox", this).text()), t.price *= t.numberInBox), t.canOrderSampleOnline = !1, t.sampleSKU = "111111", t.samplePrice = 9999.99, "1" == $("sample_order_online", this).text() && (t.canOrderSampleOnline = !0, t.sampleSKU = $("samplesku", this).text(), t.samplePrice = parseFloat($("SamplePrice", this).text())), t.packCoverageOverride = parseFloat($("packcoverage", this).text()), a.push(t)
				}
			}
		}), a.sort(function(e, t) {
			return e.sortOrder - t.sortOrder
		}), -1 != location.href.indexOf("testfinish")) for (var n = ["matt", "satin", "gloss", "glazed", "polished"], i = 0; i < n.length; ++i) {
			var o = n[i];
			vout(o);
			for (var l = 0, t = 0; t < a.length && 8 > l; ++t) - 1 != a[t].finish.toLowerCase().indexOf(o) && (a.splice(0, 0, a[t]), a.splice(t + 1, 1), ++l)
		}
		if (-1 != location.href.indexOf("testsubset")) {
			for (var t = 0; t < a.length; ++t)"" != a[t].testSubset && (a.unshift(a[t]), a.splice(t + 1, 1));
			for (var t = 0; t < a.length; ++t)"2" == a[t].testSubset && (a.unshift(a[t]), a.splice(t + 1, 1))
		}
		vout("setupDatabase(): Finish 1"), ut.tiles = a, -1 != location.href.indexOf("localhost") && ut.tiles.unshift(tt("433896")), ut.processedTiles = null;
		for (var t = 0; t < ut.filters.length; ++t) {
			var s = ut.filters[t].filterValues;
			if (!(s.length > 0)) {
				for (var c = ut.filters[t].dataProperty, u = 0; u < ut.tiles.length; ++u) if ("" != ut.tiles[u][c]) for (var d = ut.tiles[u][c].split(","), h = 0; h < d.length; ++h)"" != d[h] && -1 == s.indexOf(d[h]) && s.push(d[h]);
				if (ut.filters[t].filterValues.sort(), "-" != ut.filters[t].orderOverride) {
					var p = ut.filters[t].orderOverride.split(","),
						g = VUtils.clone(ut.filters[t].filterValues);
					ut.filters[t].filterValues = new Array;
					for (var u = 0; u < p.length; ++u) ut.filters[t].filterValues.push(g[p[u]])
				}
			}
		}
		vout("setupDatabase(): Finish 2")
	}
	function Qe(e) {
		return;
		$xml = $(e);
		var t = "";
		t += "--- START ---\n";
		for (var a = 0; a < ut.processedTiles.length; ++a) {
			var r = ut.processedTiles[a];
			t += r.sku + "	";
			var n = !1;
			$xml.find("item").each(function(e) {
				n || $("ToppsSKU", this).text() == r.sku && (n = !0)
			}), t += n ? "OK\n" : "Not In TT XML Feed 12-Mar-2015\n"
		}
		t += "--- END ---\n", vout(t)
	}
	function Ke(e) {
		var t = tt(e),
			a = "tp";
		return -1 != t.finish.toLowerCase().indexOf(",gloss,") ? a + "G4" : -1 != t.finish.toLowerCase().indexOf(",polished,") ? a + "G4" : -1 != t.finish.toLowerCase().indexOf(",glazed,") ? a + "G4" : -1 != t.finish.toLowerCase().indexOf(",satin,") ? a + "G1" : a + "G0"
	}
	function Je(e) {
		var t = new Object;
		return t.normalScale = 1, t.reflectivity = 0, t.shininess = 6, t.HDRalpha = .7, -1 != e.finish.toLowerCase().indexOf(",polished,") ? (t.normalScale = 1, t.reflectivity = 1, t.shininess = 50, t.HDRalpha = 1) : -1 != e.finish.toLowerCase().indexOf(",glazed,") ? (t.normalScale = 1, t.reflectivity = 1, t.shininess = 45, t.HDRalpha = 1) : -1 != e.finish.toLowerCase().indexOf(",gloss,") ? (t.normalScale = 1, t.reflectivity = .9, t.shininess = 40, t.HDRalpha = .9) : -1 != e.finish.toLowerCase().indexOf(",satin,") && (t.normalScale = 1, t.reflectivity = .4, t.shininess = 20, t.HDRalpha = 1), t
	}
	function et(e) {
		for (var t = 0; t < ut.rooms.length; ++t) if (ut.rooms[t].id == e) return ut.rooms[t];
		return null
	}
	function tt(e) {
		for (var t = 0; t < ut.tiles.length; ++t) if (ut.tiles[t].sku == e) return ut.tiles[t];
		return null
	}
	function at(e) {
		for (var t = 0; t < ut.tiles.length; ++t) if (ut.tiles[t].id360 == e) return ut.tiles[t];
		return null
	}
	function rt(e) {
		if (!bt) return null;
		var t = tt(e);
		if (null == t) return null;
		if ("" == t.rangeSKUs) return null;
		for (var a = new Array, r = 0; r < t.rangeSKUs.split(",").length; ++r) null != tt(t.rangeSKUs.split(",")[r]) && a.push(t.rangeSKUs.split(",")[r]);
		return a
	}
	function nt(e, t) {
		var a = pa.getRenderedSceneCanvas();
		0 == e && 0 == t ? (e = a.width, t = a.height) : 0 == e ? e = parseInt(a.width * t / a.height) : 0 == t && (t = parseInt(a.height * e / a.width)), vout("getCurDecoratedRoomScaled...");
		var r = 0,
			n = 0,
			i = a.width,
			o = a.height;
		return t / e < a.height / a.width ? (o = a.width / e * t, n = (a.height - o) / 2) : (i = a.height / t * e, r = (a.width - i) / 2), vout(r + " " + n + " " + i + " " + o + " " + e + " " + t), ga = document.createElement("canvas"), ga.width = e, ga.height = t, ga.getContext("2d").drawImage(a, r, n, i, o, 0, 0, e, t), ga
	}
	var it;
	this.testtest = 123;
	var ot = !1,
		lt = !0,
		st = !1,
		ct = this,
		ut = t;
	$(".vit-logo").hide(), setWebGLTesting();
	var dt = location.href.substring(0, location.href.lastIndexOf("/")) + "/",
		ht = 10;
	a(), A("Loading...");
	var pt = "http://toppstiles.viziserve2.com/",
		gt = "",
		ft = null,
		mt = null,
		vt = "1.00",
		bt = !0,
		Tt = null,
		kt = null,
		wt = !1,
		yt = "Tiles",
		$t = null,
		St = "FFFFFF",
		xt = "",
		Rt = "",
		At = "",
		Ct = "Bathroom",
		Pt = null,
		Dt = null,
		It = null,
		Ot = "",
		Mt = null,
		Bt = 0,
		Yt = new Array,
		Ft = new Array,
		Gt = null,
		Et = null,
		Wt = "Brick"; - 1 != location.href.indexOf("testsubset") && (Wt = "Linear");
	var Lt = !1,
		qt = !1,
		Ht = !1,
		Xt = null,
		Ut = null,
		Vt = null,
		Nt = null,
		jt = 0,
		Zt = 0,
		_t = null,
		zt = null,
		Qt = null,
		Kt = null,
		Jt = null,
		ea = null,
		ta = null,
		aa = new Object,
		ra = null,
		na = "Tile",
		ia = null,
		oa = null,
		la = null,
		sa = null,
		ca = "FF0000",
		ua = 0,
		da = null,
		ha = !1,
		pa = null;
	bt && (pa = new VMapper);
	var ga = null,
		fa = new VStorage,
		ma = new VEmail,
		va = new VShare,
		ba = null;
	Ze(), this.setup = function() {
		it = new Decorator(e, ct, ba, ut, pa, gt), outlines = new Outlines(ct, it, pa), da = new TTGUI(e, ct, ba)
	}, this.configure = function(e, t, a, r, n, i, o) {
		ft = e, mt = t, outlines.setColours(a, r, n, i), ca = o, O()
	}, this.setOption = function(e, t) {
		switch (e) {
		case "AddGroutThickness":
			ua = t
		}
	}, this.getAddGroutThickness = function() {
		return ua
	}, this.renderUndecoratedStockScene = function() {
		it.renderUndecoratedStockScene(), da.updateRoomRender(function() {
			K()
		})
	}, this.save = function() {
		x()
	}, this.getSavedRooms = function() {
		for (var e = new Array, t = 0; t < aa.savedRoomsDecorateData.length; ++t) {
			var a = new Object;
			a.roomId = aa.savedRoomsDecorateData[t].roomId, a.thumbnail = aa.savedRoomsDecorateData[t].savedThumbnailDataURL, e.push(a)
		}
		return e
	}, this.sendEmail = function(e, t, a, r) {
		d(e, t, a, r)
	}, this.prepareShare = function(e, t, a, r) {
		p(e, t, a, r)
	}, this.sendShare = function(e) {
		g(e)
	}, this.print = function() {
		u()
	}, this.addnew = function() {
		addnew()
	}, this.getPrintData = function() {
		return c()
	}, this.abortOutlining = function() {
		it.abort()
	}, this.setCurStockRoom = function(e, t) {
		_(e, t)
	}, this.setCurSavedRoom = function(e, t) {
		z(e, t)
	}, this.deleteSavedRoom = function(e) {
		J(e)
	}, this.setCurTileSKU = function(e) {
		var t = ie(e);
		return t
	}, this.setCurGrout = function(e) {
		oe(e)
	}, this.setCurPaint = function(e) {
		le(e)
	}, this.setCurPattern = function(e) {
		S(e)
	}, this.setRotateTileMode = function(e) {
		qt = e, Ht = !1, Lt = !1, na = "Tile"
	}, this.setSingleTileMode = function(e) {
		Lt = e, Ht = !1, qt = !1, na = "Tile"
	}, this.addNewZone = function() {
		Ht = !1, Lt = !1, qt = !1, it.doAddZone()
	}, this.deleteZone = function() {
		it.doDeleteZone()
	}, this.editZone = function() {
		it.doEditZone(!0)
	}, this.tileZone = function() {
		it.doTileZone()
	}, this.groutZone = function() {
		it.doGroutZone()
	}, this.deleteSingleTile = function() {
		it.doDeleteSingleTile()
	}, this.moveSingleTile = function() {
		it.doMoveSingleTile(!0)
	}, this.changeSingleTile = function() {
		it.doChangeSingleTile()
	}, this.clear = function() {
		e.broadcastMessage("Updating"), it.clearAll(), da.updateRoomRender()
	}, this.undo = function() {
		e.broadcastMessage("Updating"), it.undo(), da.updateRoomRender()
	}, this.redo = function() {
		e.broadcastMessage("Updating"), it.redo(), da.updateRoomRender()
	}, this.anythingToUndo = function() {
		return it.anythingToUndo()
	}, this.anythingToRedo = function() {
		return it.anythingToRedo()
	}, this.isRoomDecorated = function() {
		return it.isRoomDecorated()
	}, this.getData = function() {
		var e = new Object;
		return e.curDecorateData = ta, e.curRoomStylesModeOn = wt, e.curDecorateMode = na, e.curRoom = Dt, e.curTile = It, e.curGroutColour = St, e.curWallColour = xt, e.curCabinetColour = Rt, e.curWorktopColour = At, e.curSingleTileMode = Lt, e.curRotateProductMode = qt, e.curChangePatternMode = Ht, e.curPattern = Wt, e.curTilingAsRangeTiles = Xt, e.curTilingAsRangeEnable = Ut, e.curTilingAsRangePercentages = Vt, e
	}, this.getUndecoratedColourRRGGBB = function() {
		return ca
	}, this.showRoomStyleTilePopup = function(e, t, a, r) {
		if (null == e) return void da.showRoomStyleTilePopup(null);
		var n = new Object,
			i;
		if ("TileRange" == e) {
			n.nameText = "";
			for (var o = 0; o < t.length; ++o) i = tt(t[o]), n.nameText += i.name + "<br>", n.sizeText = i.displaySize;
			n.skuText = null;
			for (var i = tt(t[0]), l = "", s = rt(i.sku), o = 0; o < s.length; ++o) for (var c = 0; c < t.length; ++c) t[c] == s[o] && ("" != l && (l += "-"), l += t[c]);
			n.thumbnail = gt + "thumbnails/tiles/" + l + ".jpg?" + uncache
		} else {
			i = tt(e), n.thumbnail = gt + "thumbnails/tiles/" + i.sku + ".jpg?" + uncache, n.nameText = i.name, n.skuText = i.sku, n.sizeText = i.displaySize, n.priceText = "&pound;" + i.price.toFixed(2), i.soldInBoxes ? n.priceText2 = "price/box" : n.priceText2 = "price/tile";
			var u = Ue(i).toFixed(2);
			n.priceM2Text = "&pound;" + u, i.isBorder && (n.priceM2Text = "")
		}
		da.showRoomStyleTilePopup(n, a, r)
	}, this.showDecorateOptionActions = function(e) {
		da.showDecorateOptionActions(e)
	}, this.decorateOptionAction = function(e) {
		switch (e) {
		case "GroutBorder":
			it.doGroutBorder();
			break;
		case "ChangeBorder":
			it.doChangeBorder();
			break;
		case "DeleteBorder":
			it.doDeleteBorder();
			break;
		case "EditBorder":
			it.doEditBorder(!0);
			break;
		case "ChangeSingleTile":
			it.doChangeSingleTile();
			break;
		case "DeleteSingleTile":
			it.doDeleteSingleTile();
			break;
		case "MoveSingleTile":
			it.doMoveSingleTile(!0);
			break;
		case "MosaicFill":
			it.doMosaicFill();
			break;
		case "MosaicBorder":
			it.doMosaicBorder();
			break;
		case "TileZone":
			it.doTileZone();
			break;
		case "GroutZone":
			it.doGroutZone();
			break;
		case "DeleteZone":
			it.doDeleteZone();
			break;
		case "EditZone":
			it.doEditZone(!0)
		}
	}, this.usingWebGL = function() {
		return bt
	}, this.setNewCurDecorateData = function(e) {
		ta = e
	}, this.getGUIData = function() {
		return Tt
	}, this.selection = function(e, t, a, r) {
		var n = Z(e, t, a, r);
		switch (vout("*** gui-api-selection: Start"), vobj("Selection: " + JSON.stringify(n)), it.abort(), n.type) {
		case "SelectRoomType":
			Ct = n.data[0], B();
			break;
		case "SelectPredecoratedRoomStyle":
			Pt = n.data[0], B();
			break;
		case "SelectStockRoom":
			_(n.data[0]);
			break;
		case "SelectSavedRoom":
			z(n.data[0]);
			break;
		case "SelectPredecoratedRoom":
			Q(n.data[0]);
			break;
		case "DeleteSavedRoom":
			J(n.data[0]);
			break;
		case "SelectTilesType":
			ue(n.data[0]);
			break;
		case "SelectTile":
			var i = ie(n.data[0]);
			return i;
			break;
		case "SelectGrout":
			oe(n.data[0]);
			break;
		case "SelectWallColour":
			le(n.data[0]);
			break;
		case "SelectCabinetColour":
			se(n.data[0]);
			break;
		case "SelectWorktopColour":
			ce(n.data[0]);
			break;
		case "Filter":
			de(n.data[0], parseInt(n.data[1]));
			break;
		case "ApplyFilters":
			pe();
			break;
		case "DeleteFilter":
			he(n.data[0], parseInt(n.data[1]));
			break;
		case "Search":
			ge(n.data[0], n.data[1]);
			break;
		case "DeleteWishlistTile":
			me(n.data[0]);
			break;
		case "RefreshBasket":
			be();
			break;
		case "UpdateBasketItemQuantity":
			return Ae(n.data[0], n.data[1]), n.data[0];
			break;
		case "UpdateBasketItemCoverage":
			return Ce(n.data[0], n.data[1]), n.data[0];
			break;
		case "RefreshBasketItem":
			Re(n.data[0]);
			break;
		case "DeleteBasketItem":
			xe(n.data[0]);
			break;
		case "AddTileToBasketStart":
			ye(n.data[0]);
			break;
		case "AddTileToBasket":
			return $e(n.data[0]);
			break;
		case "AddTileRangeToBasket":
			return Se();
			break;
		case "RefreshWishlist":
			ve();
			break;
		case "AddTileToWishlist":
			fe(n.data[0]);
			break;
		case "UpdateAddTileToBasketPopupQuantity":
			Pe(n.data[0]);
			break;
		case "UpdateAddTileToBasketPopupCoverage":
			De(n.data[0]);
			break;
		case "UpdateAddTileRangeToBasketPopupEnable":
			Ie(n.data[0]);
			break;
		case "UpdateAddTileRangeToBasketPopupQuantity":
			Oe(n.data[0], n.data[1]);
			break;
		case "UpdateAddTileRangeToBasketPopupCoverage":
			Me(n.data[0], n.data[1]);
			break;
		case "UpdateAddSampleTileRangeToBasketPopupEnable":
			Be(n.data[0]);
			break;
		case "UpdateTilingAsRangePopupEnable":
			Ye(n.data[0]);
			break;
		case "UpdateTilingAsRangePopupPercentage":
			return Fe(n.data[0], n.data[1]);
			break;
		case "TilingAsRangePopupFinished":
			Ge();
			break;
		case "TilingAsRangePopupAbort":
			Ee();
			break;
		case "TilingAsRangeOrSinglePopupSetSingle":
			We();
			break;
		case "TilingAsRangeOrSinglePopupAbort":
			Le();
			break;
		case "RotateProductToggle":
			Ne();
			break;
		case "SingleTileToggle":
			je();
			break;
		case "ClearAllChanges":
		case "selectIdClearAllChanges":
			it.clearAll(), N(), A("Decorating..."), da.updateRoomRender();
			break;
		case "UndoChanges":
		case "selectIdUndoChanges":
			it.undo(), N(), A("Decorating..."), da.updateRoomRender();
			break;
		case "RedoChanges":
		case "selectIdRedoChanges":
			it.redo(), N(), A("Decorating..."), da.updateRoomRender();
			break;
		case "Pay":
			Te();
			break;
		case "OrderSample":
			return ke();
			break;
		case "AddSampleTileRangeToBasket":
			we();
			break;
		case "SaveRoom":
			x();
			break;
		case "ProductDetails":
			C(n.data[0]);
			break;
		case "ChangePattern":
			S(n.data[0]);
			break;
		case "PrepareShareRoom":
			p(n.data[0], n.data[1]);
			break;
		case "ShareRoom":
			g();
			break;
		case "EmailRoom":
			d(n.data[0], n.data[1], n.data[2]);
			break;
		case "PrintRoom":
			u();
			break;
		case "CreateZone":
			Ve();
			break;
		default:
			vout("Selection handling code yet complete")
		}
		return vout("*** gui-api-selection: Finish"), null
	}, this.showMessage = function(t, a) {
		null != t && alert("showMessage(): " + t), vout("SHOWMESSAGE: " + t), null == t && e.broadcastMessage(null), R(t, a)
	}, this.getCurRoom = function() {
		return Dt
	}, this.getCurTile = function() {
		return It
	}, this.getCurRoomWidth = function() {
		return Dt.width
	}, this.getCurRoomHeight = function() {
		return Dt.height
	}, this.disableRotateMode = function() {
		qt = !1
	}, this.disablePatternMode = function() {
		Ht = !1
	}, this.forceSingleTileModeOff = function() {
		Lt = !1
	}, this.refreshDecorate = function(t) {
		e.broadcastMessage("Updating"), A("Decorating..."), da.updateRoomRender(function() {
			if (void 0 != t) switch (t) {
			case "ShowEditZoneMessage":
				e.broadcastMessage("EditZone");
				break;
			case "ShowSelectTilesPopup":
				e.broadcastAction("ShowSelectTilesPopup")
			}
		}), N(), da.doUpdateTools(), e.decorated()
	}, this.canDecorate = function(e, t) {
		return it.canDecorate(e, t)
	}, this.getRenderData = function(e) {
		if (bt) re(function(t) {
			e(t)
		});
		else {
			var t = b(ta, 0, 0);
			e(t)
		}
	}
}
function VMapper(e) {
	var t = this,
		a = !1,
		r = null,
		n = new Array,
		i = new Array,
		o = null,
		l = null,
		s = null,
		c = null,
		u = !1,
		d = !1,
		h = new ViziGL(e);
	h.setSceneRootPath("scenes/"), h.setEnvRootPath("scenes/");
	var p = h.initialise();
	p || alert("WebGL Unsupported");
	var g;
	VUtils.isTabletOrPhoneDevice() ? (h.setIsSlowMachine(!0), g = new Texturemaker(2048)) : (h.setIsSlowMachine(!0), g = new Texturemaker(2048));
	var f = g.getGLtextureCanvas(),
		m = g.getGLbumpCanvas();
	this.getColourTextureCanvas = function() {
		return f
	}, this.getNormalTextureCanvas = function() {
		return m
	}, this.setViziGLPaths = function(e, t) {}, this.findGridIndexWithName = function(e) {
		return h.findGridIdxWithName(e)
	}, this.getGridName = function(e) {
		return h.getGridName(e)
	}, this.getGridIndexAtScreenXY = function(e, t, a) {
		var r = h.ptInAGrid(e, t);
		return a && h.ptInOverlay(e, t) ? -1 : r
	}, this.getTextureXYAtScreenXY = function(e, t, a) {
		var r = h.screenLocToMMTextureLocForGrid(e, t, a),
			n = new VPoint(parseInt(r.x), parseInt(r.y));
		return n
	}, this.getScreenXYAtTextureXY = function(e, t, a) {
		var r = h.mmTextureLocToScreenLocForGrid(e, t, a),
			n = new VPoint(r.x, r.y);
		return n
	}, this.loadSVGFromURL = function(e, t) {
		h.loadScene(e, function() {
			t()
		})
	}, this.getOutlineQuadMM = function(e) {
		var t = h.getGridHsizeMM(e),
			a = h.getGridVsizeMM(e);
		return [t, a]
	}, this.getOutlineAlignXYMM = function(e) {
		return new VPoint(h.getGridAlignmenLocationMM(e).x, h.getGridAlignmenLocationMM(e).y)
	}, this.getOutlineForGrid = function(e) {
		var t = h.getOutlinesForGrid(e);
		return t[0]
	}, this.getRenderedSceneCanvas = function() {
		return h.getRenderCanvas()
	}, this.getOverlayCanvas = function() {
		return h.getOverlayCanvas()
	}, this.getNumGrids = function() {
		return h.getNumGrids()
	}, this.renderUndecoratedStockScene = function(e) {
		for (var t = new Array, a = 0; a < h.getNumGrids(); ++a) t.push(e[a]);
		h.render(t)
	}, this.renderStockScene = function(e) {
		function t() {
			for (var t = 0; t < h.getNumGrids(); ++t) if (null != e[t]) switch (e[t].type) {
			case "Colour":
				r[t] = "#" + e[t].colourRRGGBB;
				break;
			case "Texture":
				if (a) {
					var n = e[t].supertextureCanvas,
						i = e[t].supernormalCanvas;
					g.makeFromSuperCanvases(n, i)
				}
				g.setMaterialProperties(e[t].lighting.normalScale, e[t].lighting.reflectivity, e[t].lighting.shininess, e[t].lighting.HDRalpha), r[t] = g
			}
			var o = new Object;
			o.vpLocalHost = !1, o.vpSHOW = !1, o.useBPG = !1, o.isSlowMachine = !1, o.LDR = !0, o.Lighting = !0, o.Highlights = !0, o.HDR = !1, o.HDR2 = !0, o.edgeShade = !1, o.Overlay = !0, h.render(r, o), vtime("renderStockScene(): Finish")
		}
		vtime("renderStockScene(): Start");
		for (var r = new Array, n = 0; n < h.getNumGrids(); ++n) r.push(null);
		t()
	}, this.renderStockSceneLayer = function(e) {
		function t() {
			for (var t = 0; t < h.getNumGrids(); ++t) if (null != e[t]) switch (e[t].type) {
			case "Colour":
				r[t] = "#" + e[t].colourRRGGBB;
				break;
			case "Texture":
				if (a) {
					var n = e[t].supertextureCanvas,
						i = e[t].supernormalCanvas;
					g.makeFromSuperCanvases(n, i)
				}
				g.setMaterialProperties(e[t].lighting.normalScale, e[t].lighting.reflectivity, e[t].lighting.shininess, e[t].lighting.HDRalpha), r[t] = g
			}
			h.renderLayer(r)
		}
		vout("renderStockSceneLayer()");
		for (var r = new Array, n = 0; n < h.getNumGrids(); ++n) r.push(null);
		t()
	}
}
function VPoint(e, t) {
	this.x = e, this.y = t, this.toString = function() {
		return "(" + this.x + "," + this.y + ")"
	}, this.clone = function() {
		return new VPoint(this.x, this.y)
	}
}
function VShare() {
	var e = this;
	this.send = function(e, t, a, r) {
		switch (e) {
		case "Facebook":
			var n = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(a);
			window.open(n);
			break;
		case "Twitter":
			var n = "http://twitter.com/share";
			n += "?url=" + a, n += "&text=" + t, window.open(n);
			break;
		case "Pinterest":
			var n = "http://pinterest.com/pin/create/button/";
			n += "?url=" + r, n += "&media=" + a, n += "&description=" + t, window.open(n)
		}
	}, this.facebookScrapeURL = function(e, t) {
		$.post("https://graph.facebook.com", {
			id: e,
			scrape: !0
		}, function(e) {
			t()
		})
	}
}
function VStorage() {
	function e() {
		try {
			return "localStorage" in window && null !== window.localStorage
		} catch (e) {
			return !1
		}
	}
	function t() {
		for (var e = JSON.parse(localStorage.appData), t = localStorage.appData.length, a = 0; a < e.directory.length; ++a) t += localStorage[e.directory[a].fileID].length;
		return t
	}
	function a(e) {
		for (var t = JSON.parse(localStorage.appData), a = 0; a < t.directory.length; ++a) if (t.directory[a].fileID == e) return localStorage[t.directory[a].fileID].length;
		return 0
	}
	function r() {
		localStorage.clear();
		var e = new Object;
		e.dataVersion = l, e.directory = new Array, localStorage.appData = JSON.stringify(e)
	}
	function n() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
			var t = 16 * Math.random() | 0,
				a = "x" == e ? t : 3 & t | 8;
			return a.toString(16)
		})
	}
	function i() {
		vout("App Data..."), vout("appData length=" + localStorage.appData.length);
		for (var e = JSON.parse(localStorage.appData), t = 0; t < e.directory.length; ++t) vout("FileID: " + e.directory[t].fileID + " length=" + localStorage[e.directory[t].fileID].length)
	}
	var o = this,
		l = 1,
		s = 2097152;
	if (!e()) return void verror("localstorage not supported");
	var c = !1;
	if (null == localStorage.appData) vout("VStorage: No saved data"), c = !0;
	else {
		var u = JSON.parse(localStorage.appData);
		u.dataVersion != l && (vout("VStorage: Updated data version"), c = !0)
	}
	c && r(), this.deleteAll = function() {
		r()
	}, this.deleteStorageData = function(e) {
		vout("deleteStorageData(fileID=" + e + ")");
		for (var t = JSON.parse(localStorage.appData), a = 0; a < t.directory.length; ++a) t.directory[a].fileID == e && (t.directory.splice(a, 1), localStorage.appData = JSON.stringify(t), localStorage.removeItem(e));
		i()
	}, this.saveStorageData = function(e, r) {
		vout("saveStorageData(fileID=" + e + ")"), null == e ? e = n : "" == e && (e = n);
		for (var o = (new Date).getTime(), l = JSON.parse(localStorage.appData), c = !1, u = 0; u < l.directory.length; ++u) if (l.directory[u].fileID == e) {
			c = !0;
			break
		}
		c ? l.directory[u].timeStamp = o : (entry = new Object, entry.fileID = e, entry.timeStamp = o, l.directory.push(entry));
		var d = 0;
		return c && (d = a(e)), vout("VStorage:saveStorageData(): " + t() + " - " + localStorage.appData.length + " - " + d + " + " + JSON.stringify(l).length + " + " + JSON.stringify(r).length + " > " + s), t() - localStorage.appData.length - d + JSON.stringify(l).length + JSON.stringify(r).length > s ? null : (localStorage.appData = JSON.stringify(l), localStorage[e] = JSON.stringify(r), vout("storage data length=" + localStorage[e].length), vout("saveFileData(): Done"), i(), e)
	}, this.getStorageList = function() {
		var e = JSON.parse(localStorage.appData);
		return e.directory
	}, this.loadStorageData = function(e) {
		vout("VStorage.loadStorageData(): fileID=" + e);
		for (var t = JSON.parse(localStorage.appData), a = 0; a < t.directory.length; ++a) if (t.directory[a].fileID == e) {
			var r = JSON.parse(localStorage[e]);
			return r
		}
		return null
	}
}
function VTileSet() {
	function e() {
		function e(e, t, a) {
			var r = 4 * a * e.width + 4 * t,
				n = e.data[r + 0] << 16;
			return n += e.data[r + 1] << 8, n += e.data[r + 2]
		}
		function t(e, t, a) {
			var r = 4 * a * e.width + 4 * t,
				n = e.data[r + 3] << 24;
			return n += e.data[r + 0] << 16, n += e.data[r + 1] << 8, n += e.data[r + 2]
		}
		function r(e, t, a, r) {
			var n = 4 * a * e.width + 4 * t;
			e.data[n + 0] = (16711680 & r) >> 16, e.data[n + 1] = (65280 & r) >> 8, e.data[n + 2] = 255 & r, e.data[n + 3] = r >>> 24
		}
		vout("readTilesFromSet(): Start"), n.tiles = new Array;
		for (var l = 16711935, s = n.canvas.getContext("2d"), c = s.getImageData(0, 0, n.canvas.width, n.canvas.height), u = c.width, d = c.height, h = !1, p = 0; d > p; ++p) for (var g = 0; u > g; ++g) {
			var f = t(c, g, p),
				m = f >>> 24,
				v = 16777215 & f;
			16711935 == v && 63 > m && vout("IGNORE FF00FF AS ALPHA LOW SO MIGHT NOT REALLY BE FF00FF: " + a(m) + " - sku: " + n.sku), 16711935 != v && (16711680 & v) > 15728640 && 12032 > (65280 & v) && (255 & v) > 240 && (h || (++numFixedTileSets, vout("FIXED sku" + n.sku + " x,y=" + g + "," + p + " was " + a(v))), h = !0, ("630651" == n.sku || "130088" == n.sku) && vout("FIXED x,y=" + g + "," + p + " was " + a(v)), r(c, g, p, 4278190080 + l))
		}
		for (var p = 0; d > p;) {
			for (; e(c, 0, p) == l && d > p;) {
				for (var b = 0; u > b; ++b) r(c, b, p, 0);
				++p
			}
			if (p == d) break;
			for (var T = p, g = 0, k = g; u > k && e(c, k, T) != l;)++k;
			for (; d > T;) {
				if (e(c, g, T) == l) {
					for (var b = 0; u > b; ++b) r(c, b, T, 0);
					break
				}++T
			}
			var w = k - g,
				y = T - p,
				S = new Object;
			if (S.x = g, S.y = p, S.w = w, S.h = y, 0 != o) {
				for (var b = 0; w > b; ++b) for (var x = 0; o > x; ++x) r(c, g + b, p + x, 0), r(c, g + b, p + y - 1 - x, 0);
				for (var b = 0; y > b; ++b) for (var x = 0; o > x; ++x) r(c, g + x, p + b, 0), r(c, g + w - 1 - x, p + b, 0)
			}
			n.tiles.push(S), p = T + 1
		}
		s.putImageData(c, 0, 0), n.rotateForLandscape = !1, n.width = n.tiles[0].w, n.height = n.tiles[0].h, i || n.tiles[0].w < n.tiles[0].h && (n.rotateForLandscape = !0, n.width = n.tiles[0].h, n.height = n.tiles[0].w), vout("readTilesFromSet(): End")
	}
	function t() {
		if (1) for (var e = 0; e < n.tiles.length; ++e) n.tiles[e].width != n.tiles[0].width && vout("TILESET ERROR: Variations different widths - SKU: " + n.sku), n.tiles[e].height != n.tiles[0].height && vout("TILESET ERROR: Variations different widths - SKU: " + n.sku)
	}
	function a(e) {
		return 0 > e && (e = 4294967295 + e + 1), e.toString(16).toUpperCase()
	}
	function r(e, t) {
		vtime("loadImageURLIntoCanvas(" + e + "): Start"), l.crossOrigin = "Anonymous", l.onload = function() {
			vtime("Loaded...copying"), console.log("loadImageURLIntoCanvas(): WH=" + l.width + "x" + l.height), n.canvas.width = l.width, n.canvas.height = l.height, n.canvas.getContext("2d").drawImage(l, 0, 0), vtime("loadImageURLIntoCanvas(): Done"), t()
		}, VUtils.isInternetExplorerBrowser() || (l.src = ""), l.src = e
	}
	var n = this;
	this.sku = null, this.canvas = document.createElement("canvas"), this.tiles = null, this.width = 0, this.height = 0, this.rotateForLandscape = !1;
	var i = !1,
		o = 0,
		l = new Image;
	this.free = function() {}, this.setup = function(e, t) {
		o = 0, this.sku = e, i = t
	}, this.setAddGroutThickness = function(e) {
		o = e
	}, this.load = function(a, i) {
		vtime("VTileSet.load sku " + n.sku);
		var o = 0;
		r(a, function() {
			vtime("Loaded...reading " + n.sku), e(), t(), vtime("Done2"), i()
		})
	}
}(function() {
	$(function() {
		function e(e) {
			for (var t = 0; t < e.length - 1; t++) {
				var a = t + Math.floor(Math.random() * (e.length - t)),
					r = e[a];
				e[a] = e[t], e[t] = r
			}
		}
		function t(e, t) {
			for (var a = [], r = 0; e > r;) a[r++] = t;
			return a
		}
		function a(e) {
			for (var t = e.length, a = 1 / 0; t--;) e[t] < a && (a = e[t]);
			return a
		}
		return _int = function(e) {
			return parseInt($("#" + e).val(), 10)
		}, getRandomTileSet = function(e, a, r) {
			var n = percentArrayToRatioArray(r);
			ctx = null;
			var i = t(e * a, 0);
			return drawGF(e, a, n, i), i
		}, testRandomiser = function() {
			var e = 30,
				a = 20,
				r = [];
			r.push(0), r.push(1), r.push(0), r.push(1);
			var n = percentArrayToRatioArray(r);
			ctx = null, canvas = $("#floor").get(0), ctx = canvas.getContext("2d");
			var i = t(e * a, 0);
			drawGF(e, a, n, i)
		}, percentArrayToRatioArray = function(e) {
			var t = a(e);
			0 == t && (t = 1);
			for (var r = [], n = 0; n < e.length; n++) r.push(parseFloat(e[n] / t));
			return r
		}, drawGF = function(t, a, r, n) {
			var i, o, l, s, c, u, d, h, p, g, f, m, v, b, T, k, w, y, S, x, R, A, C, P, D, I, O, M, B, Y;
			ctx && ctx.clearRect(0, 0, canvas.width, canvas.height), w = function() {
				var e, t, a, n;
				for (n = [], e = 0, t = r.length; t > e; e++) n.push({
					idx: e,
					ratio: r[e]
				});
				return n
			}().filter(function(e) {
				return e.ratio > 0
			}), s = t, f = a, y = s * f, S = 10, k = function() {
				var e, t, a;
				for (a = [], e = 0, t = w.length; t > e; e++) T = w[e], a.push(0);
				return a
			}(), v = function() {
				var e, t, a;
				for (a = [], e = 0, t = w.length; t > e; e++) T = w[e], a.push(T.ratio);
				return a
			}(), b = v.reduce(function(e, t) {
				return e + t
			}), m = function() {
				var e, t, a;
				for (a = [], e = 0, t = v.length; t > e; e++) g = v[e], a.push(g * Math.ceil(y / b));
				return a
			}(), R = 1, x = function(e) {
				return 1 - k[e] / m[e]
			}, d = function() {
				var e;
				return e = {}, {
					get: function(t, a) {
						return 0 > t || t > s - 1 || 0 > a || a > f - 1 ? -1 : e["" + t + "," + a] || -1
					},
					set: function(t, a, r) {
						return e["" + t + "," + a] = r
					}
				}
			}(), h = function(e, t, a, r) {
				var n, i;
				return null == r && (r = 1), i = function(a, r, n) {
					var i, o, l, s;
					for (i = 0, s = [r.x, r.y], o = s[0], l = s[1], o += e * a, l += t * a; d.get(o, l) === n;) o += e * a, l += t * a, i += 1;
					return i
				}, n = function(a, r, n) {
					var i, o, l;
					return l = [r.x, r.y], i = l[0], o = l[1], i += e * a, o += t * a, d.get(i, o) === n ? 1 : 0
				}, {
					score: function(e, t) {
						return {
							cp: Math.pow(i(1, e, t) + i(-1, e, t), R) * r,
							adj: n(1, e, t) + n(-1, e, t)
						}
					}
				}
			};
			var F = 50,
				G = 50,
				E = 1,
				W = 1;
			for (p = [h(1, 0, "horizontal", F), h(0, 1, "vertical", G), h(1, 1, "diagonal1", E), h(1, -1, "diagonal2", W)], u = function(e, t) {
				var a, r, n, i;
				return n = function() {
					var r, n, i;
					for (i = [], r = 0, n = p.length; n > r; r++) a = p[r], i.push(a.score(e, t));
					return i
				}(), i = function() {
					var e, t, a;
					for (a = [], e = 0, t = n.length; t > e; e++) r = n[e], a.push(r.adj);
					return a
				}().reduce(function(e, t) {
					return e + t
				}), function() {
					var e, t, a;
					for (a = [], e = 0, t = n.length; t > e; e++) r = n[e], a.push(r.cp * ((r.adj + 1) / (i + 1)));
					return a
				}().reduce(function(e, t) {
					return e + t
				})
			}, l = function(a) {
				var r, i, o, l, s, c, h, p, g, f, m, v;
				if (o = function() {
					var e, t, r;
					for (r = [], i = e = 0, t = w.length; t > e; i = ++e) T = w[i], r.push({
						e: u(a, i),
						color: i
					});
					return r
				}().sort(function(e, t) {
					return e.e - t.e
				}), l = o[o.length - 1], l.e <= 0) for (h = 0, f = o.length; f > h; h++) s = o[h], s.ep = x(s.color);
				else
				for (p = 0, m = o.length; m > p; p++) s = o[p], s.ep = x(s.color) * (1 - s.e / l.e);
				for (o.sort(function(e, t) {
					return e.ep - t.ep
				}), c = [], g = 0, v = o.length; v > g; g++) s = o[g], (0 === c.length || s.ep === c[0].ep) && c.push(s), s.ep > c[0].ep && (c = [s]);
				e(c), r = c[0].color, k[r] += 1, d.set(a.x, a.y, r);
				var b = w[r].idx;
				n[a.y * t + a.x] = b, ctx && (ctx.fillStyle = "rgb(" + 40 * b + "," + 40 * b + "," + 40 * b + ")", ctx.fillRect(a.x * S, a.y * S, S, S))
			}, o = [], A = P = 0, M = s - 1; M >= 0 ? M >= P : P >= M; A = M >= 0 ? ++P : --P) for (C = D = 0, B = f - 1; B >= 0 ? B >= D : D >= B; C = B >= 0 ? ++D : --D) o.push({
				x: A,
				y: C
			});
			for (e(o), Y = [], I = 0, O = o.length; O > I; I++) i = o[I], Y.push(l(i));
			return Y
		}, $("#generate").click(testRandomiser)
	})
}).call(this), -1 != location.href.indexOf("testnewvariations") && alert("Testing new tile variations");
var runningEnvironment = "PROD"; - 1 != location.href.indexOf("localhost:8888") && (runningEnvironment = "DEV");
var uncache = "72",
	makingPredecoratedRooms = !1; - 1 != location.href.indexOf("makeroomstyles") && (makingPredecoratedRooms = !0);
var webGLRanOKCookieName = "WebGLRanOK",
	numFixedTileSets = 0;
//# sourceMappingURL=./TilingEngineAll-min.js.map