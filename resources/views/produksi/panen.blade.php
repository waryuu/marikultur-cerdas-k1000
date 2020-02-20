@extends('layouts.app', ['title' => __('Produksi')])

@section('content')
    @include('users.partials.header', ['title' => __('Panen')])   

    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-12 order-xl-1">
                <div class="card bg-secondary shadow">
                    <div class="card-header bg-white border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">{{ __('Panen') }}</h3>
                            </div>
                            <div class="col-4 text-right">
                                <a href="{{ route('produksi.index') }}" class="btn btn-sm btn-primary">{{ __('Batal') }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form method="post" action="{{ route('produksi.update', $produksi->id) }}" autocomplete="off">
                            @csrf
                            @method('put')

                            <h6 class="heading-small text-muted mb-4">{{ __('Informasi Budi Daya') }}</h6>
                            <div class="pl-lg-4">
                                <div class="form-group{{ $errors->has('nama_ikan') ? ' has-danger' : '' }}">
                                    <label class="form-control-label" for="input-nama-ikan">{{ __('Nama Ikan') }}</label>
                                    <input type="text" name="nama_ikan" id="input-nama-ikan" class="form-control form-control-alternative{{ $errors->has('nama_ikan') ? ' is-invalid' : '' }}" placeholder="{{ __('Nama Ikan') }}" value="{{ old('nama_ikan', $produksi->nama_ikan) }}" disabled>

                                    @if ($errors->has('nama_ikan'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('nama_ikan') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('panjang_ikan') ? ' has-danger' : '' }}">
                                    <label class="form-control-label" for="input-panjang-ikan">{{ __('Panjang Ikan Setelah Panen (cm)') }}</label>
                                    <input type="number" name="panjang_ikan" id="input-panjang-ikan" class="form-control form-control-alternative{{ $errors->has('panjang_ikan') ? ' is-invalid' : '' }}" placeholder="{{ __('Panjang Ikan Setelah Panen (cm)') }}" value="{{ old('panjang_ikan', $produksi->panjang_ikan) }}" required>

                                    @if ($errors->has('panjang_ikan'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('panjang_ikan') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('jumlah_ikan') ? ' has-danger' : '' }}">
                                    <label class="form-control-label" for="input-jumlah-ikan">{{ __('Jumlah Ikan Setelah Panen') }}</label>
                                    <input type="number" name="jumlah_ikan" id="input-jumlah-ikan" class="form-control form-control-alternative{{ $errors->has('jumlah_ikan') ? ' is-invalid' : '' }}" placeholder="{{ __('Jumlah Ikan Setelah Panen') }}" value="{{ old('jumlah_ikan', $produksi->jumlah_ikan) }}" required>

                                    @if ($errors->has('jumlah_ikan'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('jumlah_ikan') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('tanggal_panen') ? ' has-danger' : '' }}">
                                    <label class="form-control-label" for="input-tgl-tebar">{{ __('Tanggal Panen') }}</label>
                                    <input type="date" name="tanggal_panen" id="input-tgl-tebar" class="form-control form-control-alternative{{ $errors->has('tanggal_panen') ? ' is-invalid' : '' }}" placeholder="{{ __('Tanggal Panen') }}" value="{{ old('tanggal_panen', $produksi->tanggal_panen) }}" required>

                                    @if ($errors->has('tanggal_panen'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('tanggal_panen') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <input type="hidden" name="status_panen" value="{{ __('Panen') }}">
                                <div class="text-center">
                                    <button type="button" class="btn btn-success mt-4" onclick="confirm('{{ __("Yakin akan melakukan panen?") }}') ? this.parentElement.parentElement.parentElement.submit() : ''">
                                        {{ __('Panen') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        @include('layouts.footers.auth')
    </div>
@endsection