import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Group9BaoTriServiceProxy, Group9BaoTriDto } from '@shared/service-proxies/service-proxies';
import { environment } from 'environments/environment';
import { Table } from "primeng/components/table/table";
import { Paginator, SelectItem } from "primeng/primeng";


@Component({
    selector: 'app-maintain-cars-notify-add',
    templateUrl: './maintain-cars-notify-add.component.html',
    styleUrls: ['./maintain-cars-notify-add.component.css', '../../style.less']
})
export class MaintainCarsNotifyAddComponent extends AppComponentBase implements OnInit, AfterViewInit {

    constructor(injector: Injector, private group9BaoTriXeService: Group9BaoTriServiceProxy) {
        super(injector);
        // this.carService.getCurrentUserName().subscribe(response=>{
        //   this.currentUserName = response;
        // })
        console.log(this);
    }

    hangxe: string;
    tenxe: string;
    namsanxuat: number;
    dinhmucnguyenlieu: number;
    loainhienlieu: string;

    luudialog: boolean;

    filterInput: Group9BaoTriDto = new Group9BaoTriDto();
    records: Group9BaoTriDto[] = [];
    group9BaoTriInput: Group9BaoTriDto = new Group9BaoTriDto();
    currentId: number;
    saving = false;


    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }



    // getValue() {
    //     this.group9LoaiXeInput.loaiXe_Ten = this.tenxe;
    //     this.group9LoaiXeInput.loaiXe_Hang = this.hangxe;
    //     this.group9LoaiXeInput.loaiXe_NamSX = this.namsanxuat;
    //     this.group9LoaiXeInput.loaiXe_DinhMucNhienLieu = this.dinhmucnguyenlieu;
    //     this.group9LoaiXeInput.loaiXe_LoaiNhienLieu = this.loainhienlieu;
    //     console.log(`[getValue] loainhienlieu: ${this.loainhienlieu}`);
    // }

    // add() {
    //     this.getValue();
    //     if (this.checkvalue() == false) return null;
    //     this.group9LoaiXeService.lOAIXE_Group9Insert(this.group9LoaiXeInput).subscribe((response) => {
    //         if (response["Result"] == "1") {
    //             this.notify.error("Thêm loại xe thất bại", "ERROR", environment.opt);
    //             this.huyconfirm();

    //         } else {
    //             this.notify.info("Thêm loại xe thành công", "SUCCESS", environment.opt);
    //         }
    //     });
    // }

    // checkvalue(): boolean {
    //     if (this.tenxe == null || this.tenxe == '') {
    //         this.notify.error("Bạn chưa nhập tên xe", "ERROR", environment.opt);
    //         return false;
    //     }
    //     else if (this.hangxe == null || this.hangxe == '') {
    //         this.notify.error("Bạn chưa nhập hãng xe", "ERROR", environment.opt);
    //         return false;
    //     }
    //     else if (this.namsanxuat == null) {
    //         this.notify.error("Bạn chưa nhập năm sản xuất", "ERROR", environment.opt);
    //         return false;
    //     }
    //     else if (this.namsanxuat <= 1950) {
    //         this.notify.error("Năm phải lớn hơn 1950", "ERROR", environment.opt);
    //         return false;
    //     }
    //     else if (this.dinhmucnguyenlieu <= 0) {
    //         this.notify.error("Định mức nhiên liệu phải lớn hơn 0", "ERROR", environment.opt);
    //         return false;
    //     }
    //     return true;
    // }

    // luuconfirm() {
    //     if (this.checkvalue() == true) {
    //         this.luudialog = true;
    //     }
    // }

    // huyconfirm() {
    //     this.tenxe = null;
    //     this.loainhienlieu = null;
    //     this.hangxe = null;
    //     this.namsanxuat = null;
    //     this.dinhmucnguyenlieu = null;
    // }

    ngOnInit() {
    }

}
